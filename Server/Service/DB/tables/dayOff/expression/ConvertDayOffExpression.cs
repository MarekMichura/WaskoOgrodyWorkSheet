namespace Wasko;

using Range = List<Tuple<DateOnly, DateOnly?>>;
using Model = ModelDayOffExpression;

class ConvertDayOffExpression
{
  private static Range HandleYear(Model model, Range range)
  {
    if (model.Year is null)
    {
      return range;
    }

    var (start, end) = range.First();

    range[0] = new(
      (model.Year < start.Year) ? new DateOnly((int)model.Year, 1, 1) : start,
      (model.Year > end?.Year) ? new DateOnly((int)model.Year, 12, 31) : end);
    return range;
  }

  private static Range HandleMonth(Model model, Range range)
  {
    if (model.Month is null)
    {
      return range;
    }

    var newRange = new Range();
    var month = (int)model.Month;

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? start;

      // if only one possible result
      if (start.Year == end.Year)
      {
        if (start.Month > month || end.Month < month)
        {
          continue;
        }

        newRange.Add(new(
          start.Month == month ? start : new DateOnly(start.Year, month, 1),
          end.Month == month ? end : new DateOnly(end.Year, month, DateTime.DaysInMonth(end.Year, month))
        ));
        return newRange;
      }

      //check if first year possible result
      if (start.Month <= month)
      {
        newRange.Add(new(
          start.Month == month ? start : new DateOnly(start.Year, month, 1),
          new DateOnly(start.Year, month, DateTime.DaysInMonth(start.Year, month))
        ));
      }

      //check if last year posable result
      if (end.Month >= month)
      {
        newRange.Add(new(
          new DateOnly(end.Year, month, 1),
          end.Month == month ? end : new DateOnly(end.Year, month, DateTime.DaysInMonth(end.Year, month))
        ));
      }

      //write rest
      for (var year = start.Year + 1; year < end.Year; year++)
      {
        newRange.Add(new(
          new DateOnly(year, month, 1),
          new DateOnly(year, month, DateTime.DaysInMonth(year, month))
        ));
      }
    }

    return newRange;
  }

  private static Range HandleDay(Model model, Range range)
  {
    if (model.Day is null)
    {
      return range;
    }

    var newRange = new Range();
    var day = (int)model.Day;

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? start;

      // if only one possible result
      if (start.Year == end.Year && start.Month == end.Month)
      {
        if (start.Day > day || end.Day < day)
        {
          continue;
        }

        newRange.Add(new(new DateOnly(start.Year, start.Month, day), null));
        continue;
      }

      //write rest
      for (var date = new DateOnly(start.Year, start.Month, day).AddMonths(start.Day <= day ? 0 : 1); date <= end; date = date.AddMonths(1))
      {
        newRange.Add(new(new DateOnly(date.Year, date.Month, day), null));
      }
    }

    return newRange;
  }

  private static Range HandleDayOfWeek(Model model, Range range)
  {
    if (model.DayOfWeek is null)
    {
      return range;
    }

    var newRange = new Range();
    var day = (int)model.DayOfWeek;

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? start;

      for (var date = start.AddDays((day - (int)start.DayOfWeek + 7) % 7); date <= end; date = date.AddDays(7))
      {
        newRange.Add(new(date, null));
      }
    }

    return newRange;
  }

  private static Range HandleEaster(Model model, Range range)
  {
    if (model.DaysAfterEaster is null)
    {
      return range;
    }

    var newRange = new Range();
    var day = (int)model.DaysAfterEaster;
    var easter = new Dictionary<int, DateOnly>();

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? start;

      for (var year = start.Year; year <= end.Year; year++)
      {
        if (!easter.TryGetValue(year, out DateOnly easterDay))
        {
          easterDay = Easter.DateAfterEastern(day, year);
          easter.Add(year, easterDay);
        }
        if (easterDay > start && easterDay < end)
        {
          newRange.Add(new(easterDay, null));
        }
      }
    }

    return newRange;
  }

  public static List<DateOnly> ConvertToDates(Model model, DateOnly start, DateOnly end)
  {
    var range = HandleYear(model, [new(start, end)]);
    // ShowRange(range, "rok");
    range = HandleMonth(model, range);
    // ShowRange(range, "miesiac");
    range = HandleDay(model, range);
    // ShowRange(range, "dzien");
    range = HandleDayOfWeek(model, range);
    // ShowRange(range, "tydzien");
    range = HandleEaster(model, range);
    // ShowRange(range, "koniec");

    return range.Select(a => new { start = a.Item1, count = (a.Item2 ?? a.Item1).DayNumber - a.Item1.DayNumber + 1 })
      .SelectMany(a => Enumerable.Range(0, a.count).Select(a.start.AddDays))
      .ToList();
  }

  // private static void ShowRange(Range range, string dec)
  // {
  //   System.Console.WriteLine("=============================================");
  //   System.Console.WriteLine(dec);
  //   foreach (var date in range)
  //   {
  //     System.Console.WriteLine($"{date.Item1} {date.Item2}");
  //   }
  // }
}