namespace Wasko;

public class RepDayOff(DbContext db, IRepUser user, IMemoryCache cache) : IRepDayOff {
  private readonly DbContext _db = db;
  private readonly IRepUser _user = user;
  private readonly IMemoryCache _cache = cache;

  public Dictionary<DateOnly, List<ModelDayOff>> GetUsersDaysOff(DateOnly start, DateOnly end, out DateTime cacheTime)
  {
    var id = _user.GetCurrentID() ?? throw new NullReferenceException();
    var key = $"user_dayOff: {id}, from: {start:yyyy-MM-dd}, to: {end:yyyy-MM-dd}";
    var (data, time) = _cache.GetOrCreate(key, (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var roles = _user.GetCurrentRoles(out var _);

      var expression = _db.DayOffExpression
        .AsSplitQuery()
        .Include(static expression => expression.TargetsUser)
        .Include(static expression => expression.TargetsRole)
        .Where(date =>
          (date.StopActive == null || date.StopActive > start) &&
          (date.TargetsUser.Any(user => user.Id == id) || date.TargetsUser.Count == 0) &&
          (date.TargetsRole.Any(role => roles.Select(role => role.Name).Contains(role.Name)) || date.TargetsRole.Count == 0))
        .ToArray();

      var date = _db.DayOffDates
        .AsSplitQuery()
        .Include(static date => date.TargetsUser)
        .Include(static date => date.TargetsRole)
        .Where(date => date.StartDate <= end && date.EndDate >= start &&
          (date.StopActive == null || date.StopActive > start) &&
          (date.TargetsUser.Any(user => user.Id == id) || date.TargetsUser.Count == 0) &&
          (date.TargetsRole.Any(role => roles.Select(role => role.Name).Contains(role.Name)) || date.TargetsRole.Count == 0))
        .ToArray();

      var result = expression.ConvertToDictionary((element) => element.GetDates(start, end));
      var extra = date.ConvertToDictionary((element) => element.GetDates(start, end));

      foreach (var (key, value) in extra) {
        if (!result.TryAdd(key, value)) {
          result[key].AddRange(value);
        }
      }

      cache.AddExpirationRole(roles);
      cache.AddExpirationUserRoles(id);
      cache.AddExpirationDayOffUser(id);
      cache.AddExpirationDayOffRoles(roles);
      cache.AddExpirationDayOff(expression);
      cache.AddExpirationDayOff(date);
      TokenGetUsersDaysOff.Cancel(id, start, end);
      return new Tuple<Dictionary<DateOnly, List<ModelDayOff>>, DateTime>(result, time);
    })!;

    cacheTime = time;
    return data;
  }
}