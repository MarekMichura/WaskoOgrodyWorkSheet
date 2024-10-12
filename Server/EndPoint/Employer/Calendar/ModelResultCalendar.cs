namespace Wasko;

class ModelResultCalendar
{
  public struct DayOff
  {
    public required string Reason { get; set; }
    public required byte Order { get; set; }
    public required bool Off { get; set; }

    public static implicit operator DayOff(ModelDayOffDate model) => new()
    {
      Reason = model.Reason,
      Order = model.Order,
      Off = model.Off
    };

    public static implicit operator DayOff(ModelDayOffExpression model) => new()
    {
      Reason = model.Reason,
      Order = model.Order,
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
