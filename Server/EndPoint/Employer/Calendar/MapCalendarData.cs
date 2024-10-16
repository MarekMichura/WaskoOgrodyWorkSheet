namespace Wasko;

using Dic = ConcurrentDictionary<DateOnly, ModelResultCalendar>;

static class MapCalendarData
{
  public static IResult CalendarData([FromBody] ModelInputCalendar model, [FromServices] IServiceCalendar calendar)
  {
    var data = calendar.GetData(model.Start, model.End);

    var result = CreateRange(model.Start, model.End);
    WorkHours(result, data.WorkHours);
    DayOffDates(result, data.DayOffDates, model.End);
    DayOffExpression(result, data.DayOffExpressions, model.Start, model.End);

    return Results.Ok(result);
  }

  private static Dic CreateRange(DateOnly start, DateOnly end)
  {
    var dayStart = start.DayNumber;
    int daysDifference = end.DayNumber - dayStart + 1;
    var result = new Dic();

    for (int i = 0; i < daysDifference; i++)
    {
      result[DateOnly.FromDayNumber(dayStart + i)] = new ModelResultCalendar { DaysOff = [], WorkingHours = [] };
    }

    return result;
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
        dates[DateOnly.FromDayNumber(dayStart + i)].DaysOff.Add(dayOff);
      }
    });
  }

  private static void DayOffExpression(Dic dates, IEnumerable<ModelDayOffExpression> daysOff, DateOnly rangeStart, DateOnly rangeEnd)
  {
    Parallel.ForEach(daysOff, dayOff =>
    {
      foreach (var date in ConvertDayOffExpression.ConvertToDates(dayOff, rangeStart, rangeEnd))
      {
        dates[date].DaysOff.Add(dayOff);
      }
    });
  }

  private static void WorkHours(Dic dates, IEnumerable<ModelWorkHour> workHours)
  {
    Parallel.ForEach(workHours, workHour =>
    {
      dates[workHour.Date].WorkingHours.Add(workHour);
    });
  }
}