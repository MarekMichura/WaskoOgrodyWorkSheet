namespace Wasko;

class ModelInputCalendar
{
  public required EnumMonth Month { get; init; }
  public required int Year { get; init; }
}

class ModelResultCalendar
{
  public struct DayOff
  {
    public required string Reason { get; set; }
    public required bool Off { get; set; }
  }
  public struct WorkHours
  {
    public required TimeOnly Start { get; set; }
    public required TimeOnly End { get; set; }
    public required string Where { get; set; }
  }


  public List<DayOff> DaysOff { get; set; } = [];
  public List<WorkHours> WorkingHours { get; set; } = [];
}

static class MapCalendarData
{
  public static IResult CalendarData([FromBody] ModelInputCalendar model, [FromServices] IServiceCalendar calendar)
  {
    var result = new Dictionary<DateOnly, ModelResultCalendar>();
    var data = calendar.GetData(model.Month, model.Year);

    var startDate = new DateOnly(model.Year, (int)model.Month, 1);
    var endDate = startDate.AddMonths(1);

    for (var addDate = startDate; addDate < endDate; addDate = addDate.AddDays(1))
      result.Add(addDate, new ModelResultCalendar());

    foreach (var dayOff in data.dayOffDates)
    {
      for (var date = dayOff.StartDate; date < dayOff.EndDate && date < endDate; date = date.AddDays(1))
      {
        if (dayOff.StopActive >= date) continue;
        result[date].DaysOff.Add(new ModelResultCalendar.DayOff()
        {
          Off = dayOff.Off,
          Reason = dayOff.Reason
        });
      }
    }

    foreach (var dayOff in data.dayOffExpressions)
    {
      foreach (var date in dayOff.convertToDate(model.Year, model.Month).Where(a => a < endDate))
      {
        if (dayOff.StopActive >= date) continue;

        result[date].DaysOff.Add(new ModelResultCalendar.DayOff()
        {
          Off = dayOff.Off,
          Reason = dayOff.Reason
        });
      }
    }

    foreach (var workingHours in data.workHours)
    {
      result[workingHours.Date].WorkingHours.Add(new ModelResultCalendar.WorkHours()
      {
        Start = workingHours.WorkStart,
        End = workingHours.WorkEnd,
        Where = workingHours.WorkLocation!.Name
      });
    }
    return Results.Ok(result);
  }
}