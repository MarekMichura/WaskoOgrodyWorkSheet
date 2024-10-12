namespace Wasko;

using Range = List<Tuple<DateOnly, DateOnly?>>;
using Model = ModelDayOffExpression;
using System.Collections;
using System.Net;

class ConvertDayOffExpression
{
  private static Range HandleYear(Model model, Range range)
  {
    if (model.Year is null) return range;
    var start = range.First().Item1;
    var end = range.First().Item2;

    range[0] = new(
      (model.Year < start.Year) ? new DateOnly((int)model.Year, 1, 1) : start,
      (model.Year > end?.Year) ? new DateOnly((int)model.Year, 12, 31) : end);
    return range;
  }

  private static Range HandleMonth(Model model, Range range)
  {
    if (model.Month is null) return range;
    var newRange = new Range();
    var month = (int)model.Month;

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? start;

      // if only one possible result
      if (start.Year == end.Year)
      {
        if (start.Month > month || end.Month < month) continue;
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
          new DateOnly(end.Year, month, 1),
          end.Month == month ? end : new DateOnly(end.Year, month, DateTime.DaysInMonth(end.Year, month))
        ));
      }
    }

    return newRange;
  }

  private static Range HandleDay(Model model, Range range)
  {
    if (model.Day is null) return range;
    var newRange = new Range();
    var day = (int)model.Day;

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? start;

      // if only one possible result
      if (start.Year == end.Year && start.Month == end.Month)
      {
        if (start.Day > day || end.Day < day) continue;
        newRange.Add(new(new DateOnly(start.Year, start.Month, day), null));
        return newRange;
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
    if (model.DayOfWeek is null) return range;
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
    if (model.DaysAfterEaster is null) return range;
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
        newRange.Add(new(easterDay, null));
      }
    }

    return newRange;
  }

  public static List<DateOnly> ConvertToDates(Model model, DateOnly _start, DateOnly _end)
  {
    var result = new List<DateOnly>();
    var range = new Range { new(_start, _end) };
    range = HandleYear(model, range);
    range = HandleMonth(model, range);
    range = HandleDay(model, range);
    range = HandleDayOfWeek(model, range);
    range = HandleEaster(model, range);
    // if (model.Year is not null)
    // {
    //   if (model.Year < _start.Year || model.Year > _end.Year) return result;

    //   range[0] = new(
    //     (model.Year < _start.Year) ? new DateOnly((int)model.Year, 1, 1) : _start,
    //     (model.Year > _end.Year) ? new DateOnly((int)model.Year, 12, 31) : _end
    //   );
    // }
    // if (model.Month is not null)
    // {
    //   range = GetMonthsFromRange(range[0].Item1, range[0].Item2 ?? range[0].Item1, (int)model.Month);
    //   if (range.Count == 0) return result;
    // }
    // if (model.Day is not null)
    // {
    //   int day = (int)model.Day;
    //   range = range.SelectMany(a => GetDaysFromRange(a.Item1, a.Item2 ?? a.Item1, day)).ToList();
    //   if (range.Count == 0) return result;
    // }
    // if (model.DayOfWeek is not null)
    // {
    //   int day = (int)model.DayOfWeek;
    //   range = range.SelectMany(a => GetDayOfWeekFromRange(a.Item1, a.Item2 ?? a.Item1, day)).ToList();
    //   if (range.Count == 0) return result;
    // }
    // if (model.DaysAfterEaster is not null)
    // {
    //   var easternDays = new Dictionary<int, DateOnly>();
    //   for (var year = _start.Year; year <= _end.Year; year++)
    //   {
    //     easternDays.Add(year, Easter.DateAfterEastern((int)model.DaysAfterEaster, year));
    //   }
    //   range = range.SelectMany(a => GetEasternFromRange(a.Item1, a.Item2 ?? a.Item1, easternDays)).ToList();
    //   if (range.Count == 0) return result;
    // }

    foreach (var a in range)
    {
      var start = a.Item1;
      var end = a.Item2 ?? a.Item1;

      if (a.Item2 is null)
      {
        result.Add(a.Item1);
        continue;
      }

      result.AddRange(
        Enumerable.Range(0, end.DayNumber - start.DayNumber).Select(start.AddDays));
    };

    // foreach (var _range in range)
    // {
    //   if (_range.Item2 is null) result.Add(_range.Item1);

    //   for (var date = _range.Item1; date <= _range.Item2; date = date.AddDays(1))
    //   {
    //     if (model.StopActive is null || model.StopActive > date)
    //       result.Add(date);
    //   }
    // }
    return result;
  }

  private static List<Tuple<DateOnly, DateOnly?>> GetMonthsFromRange(DateOnly start, DateOnly end, int month)
  {
    var result = new List<Tuple<DateOnly, DateOnly?>>();
    if (start.Year == end.Year)
    {
      if (start.Month > month || end.Month < month) return result;
      result.Add(new(
        start.Month == month ? start : new DateOnly(start.Year, month, 1),
        end.Month == month ? end : new DateOnly(end.Year, month, DateTime.DaysInMonth(end.Year, month))
      ));
      return result;
    }
    if (start.Month <= month)
    {
      result.Add(new(
        start.Month == month ? start : new DateOnly(start.Year, month, 1),
        new DateOnly(start.Year, month, DateTime.DaysInMonth(start.Year, month))
      ));
    }

    for (var year = start.Year + 1; year < end.Year; year++)
    {
      result.Add(new(
        new DateOnly(year, month, 1),
        new DateOnly(year, month, DateTime.DaysInMonth(end.Year, month))
      ));
    }

    if (end.Month >= month)
    {
      result.Add(new(
        new DateOnly(end.Year, month, 1),
        end.Month == month ? end : new DateOnly(end.Year, month, DateTime.DaysInMonth(end.Year, month))
      ));
    }

    return result;
  }

  private static List<Tuple<DateOnly, DateOnly?>> GetDaysFromRange(DateOnly start, DateOnly end, int day)
  {
    var result = new List<Tuple<DateOnly, DateOnly?>>();
    if (start.Year == end.Year && start.Month == end.Month)
    {
      if (start.Day > day || end.Day < day) return result;
      result.Add(new(new(start.Year, start.Month, day), null));
      return result;
    }

    if (start.Day <= day)
    {
      result.Add(new(
        new(start.Year, start.Month, day), null
      ));
    }

    var endFind = new DateTime(end.Year, end.Month, 1).AddDays(-1);
    for (var date = new DateTime(start.Year, start.Month, 1).AddMonths(1); date < endFind; date = date.AddMonths(1))
    {
      result.Add(new(
        new DateOnly(date.Year, date.Month, day), null
      ));
    }

    if (end.Day >= day)
    {
      result.Add(new(
        new(end.Year, end.Month, day), null
      ));
    }

    return result;
  }

  private static List<Tuple<DateOnly, DateOnly?>> GetDayOfWeekFromRange(DateOnly start, DateOnly end, int day)
  {
    var result = new List<Tuple<DateOnly, DateOnly?>>();
    var firstDayOfWeek = start.AddDays((day - (int)start.DayOfWeek + 7) % 7);
    if (end.DayNumber - start.DayNumber < 7)
    {
      if (firstDayOfWeek > end) return result;
      result.Add(new(firstDayOfWeek, null));
      return result;
    }

    for (var date = firstDayOfWeek; date <= end; date = date.AddDays(7))
    {
      result.Add(new(date, null));
    }

    return result;
  }

  private static List<Tuple<DateOnly, DateOnly?>> GetEasternFromRange(DateOnly start, DateOnly end, Dictionary<int, DateOnly> eastern)
  {
    var result = new List<Tuple<DateOnly, DateOnly?>>();
    if (start.Year == end.Year)
    {
      var easternDay = eastern[start.Year];
      if (start > easternDay || end < easternDay) return result;
      result.Add(new(easternDay, null));
      return result;
    }

    for (var year = start.Year; year <= end.Year; year++)
    {
      var easternDay = eastern[year];
      if (start > easternDay || end < easternDay) continue;
      result.Add(new(easternDay, null));
    }

    return result;
  }
}