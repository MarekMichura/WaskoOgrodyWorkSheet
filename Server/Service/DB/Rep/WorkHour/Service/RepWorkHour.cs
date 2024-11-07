namespace Wasko;

public class RepWorkHour(IDbContextFactory<DbContext> factory, IMemoryCache cache) : IRepWorkHour {
  private readonly IMemoryCache _cache = cache;
  private readonly IDbContextFactory<DbContext> _factory = factory;

  public async Task<CacheResult<DicWorkHours>> GetUsersWorkHoursAsync(string id, DateOnly start, DateOnly end)
  {
    var key = $"workHours user:{id} from:{start:yyyy-MM-dd} to:{end:yyyy-MM-dd}";
    return await _cache.GetOrCreateAsync(key, async (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var result = new DicWorkHours();

      using var db = await _factory.CreateDbContextAsync();
      var workHours = await db.WorkHours
        .AsSplitQuery()
        .Include(workHour => workHour.WorkLocation)
        .Include(workHour => workHour.Chords)
        .Where(workHour => workHour.UserID == id && workHour.Date >= start && workHour.Date <= end)
        .ToArrayAsync();

      foreach (var workHour in workHours) {
        if (!result.TryAdd(workHour.Date, [workHour])) {
          result[workHour.Date].Add(workHour);
        }
      }

      cache.AddExpirationWorkHour(workHours);
      cache.AddExpirationDayOffUser(id);
      TokenGetUsersWorkHour.Cancel(id, start, end);
      return new CacheResult<DicWorkHours>(result, time);
    })!;
  }
}