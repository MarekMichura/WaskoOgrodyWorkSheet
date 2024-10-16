namespace Wasko;

public struct ModelResultCalendarDayOff
{
  public required string Reason { get; set; }
  public required byte Order { get; set; }
  public required bool Off { get; set; }

  public static implicit operator ModelResultCalendarDayOff(ModelDayOffDate model) => new()
  {
    Reason = model.Reason,
    Order = model.Order,
    Off = model.Off
  };

  public static implicit operator ModelResultCalendarDayOff(ModelDayOffExpression model) => new()
  {
    Reason = model.Reason,
    Order = model.Order,
    Off = model.Off
  };
}

public struct ModelResultCalendarWorkHours
{
  public required TimeOnly Start { get; set; }
  public required TimeOnly End { get; set; }
  public required string Where { get; set; }

  public static implicit operator ModelResultCalendarWorkHours(ModelWorkHour model) => new()
  {
    Start = model.WorkStart,
    End = model.WorkEnd,
    Where = model.WorkLocation!.Name
  };
}


public readonly struct ModelResultCalendar
{
  public ConcurrentBag<ModelResultCalendarDayOff> DaysOff { get; init; }
  public ConcurrentBag<ModelResultCalendarWorkHours> WorkingHours { get; init; }

  public ModelResultCalendar()
  {
    DaysOff = new ConcurrentBag<ModelResultCalendarDayOff>();
    WorkingHours = new ConcurrentBag<ModelResultCalendarWorkHours>();
  }
}