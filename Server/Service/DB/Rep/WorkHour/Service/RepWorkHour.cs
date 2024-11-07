namespace Wasko;

public class RepWorkHour(DbContext db, IRepUser user, IMemoryCache cache) : IRepWorkHour {
  private readonly DbContext _db = db;
  private readonly IRepUser _user = user;
  private readonly IMemoryCache _cache = cache;

  public Dictionary<DateOnly, List<ModelWorkHours>> GetUsersWorkHours(DateOnly start, DateOnly end, out DateTime cacheTime)
  {
    var id = _user.GetCurrentID() ?? throw new NullReferenceException();
    var (data, time) = _cache.GetOrCreate($"user_WorkHours:{id} from:{start:yyyy-MM-dd} to:{end:yyyy-MM-dd}", (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var result = new Dictionary<DateOnly, List<ModelWorkHours>>();

      var workHours = _db.WorkHours
        .AsSplitQuery()
        .Include(workHour => workHour.WorkLocation)
        .Include(workHour => workHour.Chords)
        .Where(workHour => workHour.UserID == id && workHour.Date >= start && workHour.Date <= end)
        .ToArray();

      foreach (var workHour in workHours) {
        if (!result.TryAdd(workHour.Date, [workHour])) {
          result[workHour.Date].Add(workHour);
        }
      }

      cache.AddExpirationWorkHour(workHours);
      cache.AddExpirationDayOffUser(id);
      TokenGetUsersWorkHour.Cancel(id, start, end);
      return new Tuple<Dictionary<DateOnly, List<ModelWorkHours>>, DateTime>(result, time);
    })!;

    cacheTime = time;
    return data;
  }
}