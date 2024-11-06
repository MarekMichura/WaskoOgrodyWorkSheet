using System.Diagnostics;

namespace Wasko;

public class RepDayOff(DbContext db, IRepUser user, IMemoryCache cache) : IRepDayOff {
  private readonly DbContext _db = db;
  private readonly IRepUser _user = user;
  private readonly IMemoryCache _cache = cache;

  public Dictionary<DateOnly, List<ModelDayOff>> GetUsersDaysOff(DateOnly start, DateOnly end, out DateTime cacheTime)
  {
    var id = _user.GetCurrentID() ?? throw new NullReferenceException();
    var data = _cache.GetOrCreate($"user_dayOff:{id} from:{start} to:{end}", (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var roles = _user.GetCurrentRoles(out var _);

      var dayOffFromExpression = _db.DayOffExpression
        .AsSplitQuery()
        .Include(static expression => expression.TargetsUser)
        .Include(static expression => expression.TargetsRole)
        .Where(expression =>
          (expression.StopActive == null || expression.StopActive > start) &&
          (expression.TargetsUser.Any(user => user.Id == id) || expression.TargetsUser.Count == 0) &&
          (expression.TargetsRole.Any(role => roles.Select(role => role.Name).Contains(role.Name)) || expression.TargetsRole.Count == 0))
        .ToList();

      var dayOffFromDates = _db.DayOffDates
        .AsSplitQuery()
        .Include(static date => date.TargetsUser)
        .Include(static date => date.TargetsRole)
        .Where(date =>
          (date.StopActive == null || date.StopActive > start) &&
          (date.TargetsUser.Any(user => user.Id == id) || date.TargetsUser.Count == 0) &&
          (date.TargetsRole.Any(role => roles.Select(role => role.Name).Contains(role.Name)) || date.TargetsRole.Count == 0))
        .ToList();

      var result = dayOffFromExpression.ConvertToDictionary((element) => element.GetDates(start, end));
      foreach (var (date, elements) in dayOffFromDates.ConvertToDictionary((element) => element.GetDates(start, end))) {
        if (!result.TryGetValue(date, out var value)) {
          value = elements;
          result.Add(date, value);
          continue;
        }
        value.AddRange(elements);
      }

      cache.AddExpirationRole(roles);
      cache.AddExpirationUserRoles(id);
      cache.AddExpirationDayOff(dayOffFromDates);
      cache.AddExpirationDayOff(dayOffFromExpression);
      cache.AddExpirationDayOffRoles(roles);
      cache.AddExpirationDayOffUser(id);
      TokenGetUsersDaysOff.Cancel(id, start, end);
      return new { result, time };
    });

    cacheTime = data!.time;
    return data!.result;
  }
}