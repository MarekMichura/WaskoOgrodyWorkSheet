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

  public static implicit operator ModelResultCalendarWorkHours(ModelWorkHours model) => new()
  {
    Start = model.WorkStart,
    End = model.WorkEnd,
    Where = model.WorkLocation!.Name
  };
}


public readonly struct ModelResultCalendarData
{
  public ModelResultCalendarData() { }

  public List<ModelResultCalendarDayOff> DaysOff { get; init; } = [];
  public List<ModelResultCalendarWorkHours> WorkingHours { get; init; } = [];
}

public readonly struct ModelResultCalendar
{
  public Dictionary<DateOnly, ModelResultCalendarData> Data { get; init; }
  public DateTime Time { get; init; }

}