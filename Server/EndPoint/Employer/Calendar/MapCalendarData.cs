namespace Wasko;

static class MapCalendarData
{
  public static IResult CalendarData([FromBody] ModelInputCalendar model, [FromServices] IServiceCalendar calendar)
  {
    var data = calendar.GetData(model.Start, model.End);
    var result = Enumerable.Range(0, model.End.DayNumber - model.Start.DayNumber + 1).Select(model.Start.AddDays)
       .ToDictionary(a => a, a => new ModelResultCalendar());

    data.DayOffDates
      .Select(a => new { data = a, start = a.StartDate, end = new[] { a.EndDate ?? a.StartDate, a.StopActive ?? model.End, model.End }.Min() })
      .SelectMany(a => Enumerable.Range(0, a.end.DayNumber - a.start.DayNumber + 1)
        .Select(b => new { a.data, date = a.start.AddDays(b) }))
      .ForEach(a => result[a.date].DaysOff.Add(a.data));

    data.DayOffExpressions
      .SelectMany(a => ConvertDayOffExpression.ConvertToDates(a, model.Start, model.End)
        .Select(b => new { data = a, date = b }))
      .ForEach(a => result[a.date].DaysOff.Add(a.data));

    data.WorkHours.ForEach(a => result[a.Date].WorkingHours.Add(a));

    return Results.Ok(result);
  }
}