namespace Wasko;

public interface IRepWorkHour {
  public Dictionary<DateOnly, List<ModelWorkHours>> GetUsersWorkHours(DateOnly start, DateOnly end, out DateTime cacheTime);
}
