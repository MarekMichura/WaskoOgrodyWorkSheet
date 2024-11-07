
namespace Wasko;

public class RepDayOff(IRepUser user, IMemoryCache cache, IDbContextFactory<DbContext> factory) : IRepDayOff {
  private readonly IRepUser _user = user;
  private readonly IMemoryCache _cache = cache;
  private readonly IDbContextFactory<DbContext> _factory = factory;

  public async Task<CacheResult<DicDaysOff>> GetUsersDaysOffAsync(string id, DateOnly start, DateOnly end)
  {
    var key = $"dayOff user:{id}, from:{start:yyyy-MM-dd}, to:{end:yyyy-MM-dd}";
    return (await _cache.GetOrCreateAsync(key, async (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var (roles, _) = await _user.GetUserRolesAsync(id);

      var expression = Task.Run(async () => {
        using var db = await _factory.CreateDbContextAsync();
        return await db.DayOffExpression
          .Include(static expression => expression.TargetsUser)
          .Include(static expression => expression.TargetsRole)
          .Where(date =>
            (date.StopActive == null || date.StopActive > start) &&
            (date.TargetsUser.Count == 0 || date.TargetsUser.Any(user => user.Id == id)) &&
            (date.TargetsRole.Count == 0 || date.TargetsRole.Any(role => roles.Select(role => role.Id).Contains(role.Id))))
          .ToArrayAsync();
      });
      var date = Task.Run(async () => {
        using var db = await _factory.CreateDbContextAsync();
        return await db.DayOffDates
          .Include(static date => date.TargetsUser)
          .Include(static date => date.TargetsRole)
          .Where(date => date.StartDate <= end && date.EndDate >= start &&
            (date.StopActive == null || date.StopActive > start) &&
            (date.TargetsUser.Count == 0 || date.TargetsUser.Any(user => user.Id == id)) &&
            (date.TargetsRole.Count == 0 || date.TargetsRole.Any(role => roles.Select(role => role.Id).Contains(role.Id))))
          .ToArrayAsync();
      });

      await Task.WhenAll(date, expression);
      var result = (await expression).ConvertToDictionary((element) => element.GetDates(start, end));
      var extra = (await date).ConvertToDictionary((element) => element.GetDates(start, end));
      foreach (var (key, value) in extra) {
        if (!result.TryAdd(key, value)) {
          result[key].AddRange(value);
        }
      }

      cache.AddExpirationRole(roles);
      cache.AddExpirationUserRoles(id);
      cache.AddExpirationDayOffUser(id);
      cache.AddExpirationDayOffRoles(roles);
      cache.AddExpirationDayOff(expression.Result);
      cache.AddExpirationDayOff(date.Result);
      TokenGetUsersDaysOff.Cancel(id, start, end);
      return new CacheResult<DicDaysOff>(result, time);
    }))!;
  }
}