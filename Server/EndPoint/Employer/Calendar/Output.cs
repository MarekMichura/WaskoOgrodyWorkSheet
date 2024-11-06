namespace Wasko;

public class ModelOutputMapEmployerCalendar {
  public IEnumerable<ModelOutputMapEmployerCalendarDayOff> DayOff { get; set; } = [];
  public IEnumerable<ModelOutputMapEmployerCalendarWorkHour> WorkHours { get; set; } = [];
}

public struct ModelOutputMapEmployerCalendarDayOff {
  public required string Reason { get; set; }
  public required bool Off { get; set; }
  public byte Order { get; set; }

  public static implicit operator ModelOutputMapEmployerCalendarDayOff(ModelDayOff model) => new() {
    Reason = model.Reason,
    Order = model.Order,
    Off = model.Off,
  };
}

public struct ModelOutputMapEmployerCalendarWorkHour {
  public required TimeOnly WorkStart { get; set; }
  public required TimeOnly WorkEnd { get; set; }
  public required string Location { get; set; }

  public static implicit operator ModelOutputMapEmployerCalendarWorkHour(ModelWorkHours model) => new() {
    WorkStart = model.WorkStart,
    WorkEnd = model.WorkEnd,
    Location = model.WorkLocation?.Name ?? throw new NullReferenceException()
  };
}