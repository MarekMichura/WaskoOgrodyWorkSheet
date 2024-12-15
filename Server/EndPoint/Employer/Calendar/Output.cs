namespace Wasko;

public class ModelOutputMapEmployerCalendar {
  public IEnumerable<ModelOutputMapEmployerCalendarDayOff> DayOff { get; set; } = [];
  public IEnumerable<ModelOutputMapEmployerCalendarWorkHour> WorkingHours { get; set; } = [];
}

public struct ModelOutputMapEmployerCalendarDayOff {
  public required string Reason { get; set; }
  public required bool Off { get; set; }
  public byte Order { get; set; }

  public static implicit operator ModelOutputMapEmployerCalendarDayOff(ModelDayOff model) => new() {
    Off = model.Off,
    Order = model.Order,
    Reason = model.Reason,
  };
}

public struct ModelOutputMapEmployerCalendarWorkHour {
  public required TimeOnly WorkStart { get; set; }
  public required TimeOnly WorkEnd { get; set; }
  public required string Location { get; set; }

  public static implicit operator ModelOutputMapEmployerCalendarWorkHour(ModelWorkHours model) => new() {
    WorkEnd = model.WorkEnd,
    WorkStart = model.WorkStart,
    Location = model.WorkLocation?.Name ?? throw new NullReferenceException()
  };
}
