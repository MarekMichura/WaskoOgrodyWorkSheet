namespace Wasko;

using Dic = ConcurrentDictionary<DateOnly, ModelResultCalendar>;

static class MapCalendarData
{
  public static IResult CalendarData([FromBody] ModelInputCalendar model, [FromServices] IServiceCalendar calendar)
  {
    var data = calendar.GetData(model.Start, model.End);

    var result = new Dic();
    WorkHours(result, data.WorkHours);
    DayOffDates(result, data.DayOffDates, model.End);
    DayOffExpression(result, data.DayOffExpressions, model.Start, model.End);

    return Results.Ok(result);
  }

  private static void DayOffDates(Dic dates, IEnumerable<ModelDayOffDate> daysOff, DateOnly rangeEnd)
  {
    Parallel.ForEach(daysOff, dayOff =>
    {
      var start = dayOff.StartDate;
      var end = dayOff.EndDate ?? dayOff.StartDate;
      if (dayOff.StopActive is not null && dayOff.StopActive < end)
        end = dayOff.StopActive ?? throw new NullReferenceException();
      if (rangeEnd < end)
        end = rangeEnd;

      var dayStart = start.DayNumber;
      var daysDifference = end.DayNumber - start.DayNumber + 1;

      for (int i = 0; i < daysDifference; i++)
      {
        var date = DateOnly.FromDayNumber(dayStart + i);
        if (!dates.ContainsKey(date))
          dates.TryAdd(date, new ModelResultCalendar());
        dates[date].DaysOff.Add(dayOff);
      }
    });
  }

  private static void DayOffExpression(Dic dates, IEnumerable<ModelDayOffExpression> daysOff, DateOnly rangeStart, DateOnly rangeEnd)
  {
    Parallel.ForEach(daysOff, dayOff =>
    {
      foreach (var date in ConvertDayOffExpression.ConvertToDates(dayOff, rangeStart, rangeEnd))
      {
        if (!dates.ContainsKey(date))
          dates.TryAdd(date, new ModelResultCalendar());
        dates[date].DaysOff.Add(dayOff);
      }
    });
  }

  private static void WorkHours(Dic dates, IEnumerable<ModelWorkHour> workHours)
  {
    Parallel.ForEach(workHours, workHour =>
    {
      if (!dates.ContainsKey(workHour.Date))
        dates.TryAdd(workHour.Date, new ModelResultCalendar());
      dates[workHour.Date].WorkingHours.Add(workHour);
    });
  }
}