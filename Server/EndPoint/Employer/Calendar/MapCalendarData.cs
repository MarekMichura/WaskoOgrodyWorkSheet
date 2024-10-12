namespace Wasko;

class ModelInputCalendar
{
  public required DateOnly Start { get; init; }
  public required DateOnly End { get; init; }
}

class ModelResultCalendar
{
  public struct DayOff
  {
    public required string Reason { get; set; }
    public required bool Off { get; set; }

    public static implicit operator DayOff(ModelDayOffDate model) => new()
    {
      Reason = model.Reason,
      Off = model.Off
    };

    public static implicit operator DayOff(ModelDayOffExpression model) => new()
    {
      Reason = model.Reason,
      Off = model.Off
    };
  }
  public struct WorkHours
  {
    public required TimeOnly Start { get; set; }
    public required TimeOnly End { get; set; }
    public required string Where { get; set; }

    public static implicit operator WorkHours(ModelWorkHour model) => new()
    {
      Start = model.WorkStart,
      End = model.WorkEnd,
      Where = model.WorkLocation!.Name
    };
  }

  public List<DayOff> DaysOff { get; set; } = [];
  public List<WorkHours> WorkingHours { get; set; } = [];
}

static class MapCalendarData
{
  public static IResult CalendarData([FromBody] ModelInputCalendar model, [FromServices] IServiceCalendar calendar)
  {
    var result = new Dictionary<DateOnly, ModelResultCalendar>();
    var data = calendar.GetData(model.Start, model.End);

    for (var addDate = model.Start; addDate <= model.End; addDate = addDate.AddDays(1))
      result.Add(addDate, new ModelResultCalendar());

    data.dayOffDates.ForEach(a =>
    {
      var endDate = a.EndDate ?? a.StartDate;
      for (var date = a.StartDate; date <= endDate && date < model.End; date = date.AddDays(1))
      {
        if (a.StopActive >= date) continue;
        result[date].DaysOff.Add(a);
      }
    });

    data.dayOffExpressions
      .SelectMany(a => ConvertDayOffExpression.ConvertToDates(a, model.Start, model.End).Select(b => new { data = a, date = b }))
      .ForEach(a => result[a.date].DaysOff.Add(a.data));

    data.workHours.ForEach(a => result[a.Date].WorkingHours.Add(a));

    return Results.Ok(result);
  }
}