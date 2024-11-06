namespace Wasko;

public static partial class MapEmployer {
  public static IResult MapCalendar([FromQuery] DateOnly start,
                                    [FromQuery] DateOnly end,
                                    [FromServices] IMemoryCache cache,
                                    [FromServices] IRepUser repUser,
                                    [FromServices] IRepDayOff repDayOff,
                                    [FromServices] IRepWorkHour repWorkHour,
                                    HttpContext context)
  {
    var id = repUser.GetCurrentID() ?? throw new NullReferenceException();
    var (time, result) = cache.GetOrCreate($"EmployerCalendar_{id}", (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var dayOff = repDayOff.GetUsersDaysOff(start, end, out var timeDayOff);
      var workHour = repWorkHour.GetUsersWorkHours(start, end, out var timeWorkHours);

      var time = new[] { timeDayOff, timeWorkHours }.Max();
      var result = new Dictionary<DateOnly, ModelOutputMapEmployerCalendar>();

      foreach (var (key, value) in dayOff) {
        result[key] = new() { DayOff = value.Select(dayOff => (ModelOutputMapEmployerCalendarDayOff)dayOff) };
      }
      foreach (var (key, value) in workHour) {
        if (!result.TryGetValue(key, out var obj)) {
          obj = new() { WorkHours = value.Select(workHours => (ModelOutputMapEmployerCalendarWorkHour)workHours) };
          result[key] = obj;
          continue;
        }
        obj.WorkHours = value.Select(workHours => (ModelOutputMapEmployerCalendarWorkHour)workHours);
      }

      cache.AddExpirationGetUsersDaysOff(id, start, end);
      cache.AddExpirationGetUsersWorkHour(id, start, end);
      return new Tuple<DateTime, Dictionary<DateOnly, ModelOutputMapEmployerCalendar>>(time, result);
    })!;

    if (context.IfModifiedSince(time)) {
      return Results.StatusCode(304);
    }

    return Results.Ok(result);
  }
}