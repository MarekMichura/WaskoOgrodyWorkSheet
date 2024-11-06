namespace Wasko;

public interface IRepDayOff {
  public Dictionary<DateOnly, List<ModelDayOff>> GetUsersDaysOff(DateOnly start, DateOnly end, out DateTime cacheTime);
}
