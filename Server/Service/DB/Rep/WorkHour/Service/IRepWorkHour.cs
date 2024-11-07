namespace Wasko;

public interface IRepWorkHour {
  public Task<CacheResult<DicWorkHours>> GetUsersWorkHoursAsync(string id, DateOnly start, DateOnly end);
}