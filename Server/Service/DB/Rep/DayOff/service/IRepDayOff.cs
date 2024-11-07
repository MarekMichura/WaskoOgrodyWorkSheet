namespace Wasko;

public interface IRepDayOff {
  public Task<CacheResult<DicDaysOff>> GetUsersDaysOffAsync(string id, DateOnly start, DateOnly end);
}
