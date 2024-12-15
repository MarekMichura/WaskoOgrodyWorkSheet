namespace Wasko;

public static partial class MapEmployer {
  public static async Task<IResult> MapCalendarAsync(
    [AsParameters] ModelInputMapEmployerCalendar model,
    [FromServices] IValidator<ModelInputMapEmployerCalendar> validator,
    [FromServices] IMemoryCache cache,
    [FromServices] IRepUser repUser,
    [FromServices] IRepDayOff repDayOff,
    [FromServices] IRepWorkHour repWorkHour,
    HttpContext context)
  {
    var validation = validator.Validate(model);
    if (!validation.IsValid) {
      return Results.BadRequest(validation.ToDictionary());
    }
    var (start, end) = model;
    var id = repUser.GetCurrentID() ?? throw new NullReferenceException();
    var dayOff = repDayOff.GetUsersDaysOffAsync(id, start, end);
    var workHour = repWorkHour.GetUsersWorkHoursAsync(id, start, end);

    await Task.WhenAll(dayOff, workHour);
    var key = $"Employer calendar user:{id} start:{model.Start:yyyy-MM-dd} end:{model.End:yyyy-MM-dd}";
    var (result, time) = cache.GetOrCreate(key, (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;

      var result = new Dictionary<DateOnly, ModelOutputMapEmployerCalendar>();
      foreach (var (key, value) in dayOff.Result.Data) {
        result[key] = new() { DayOff = value.Select(dayOff => (ModelOutputMapEmployerCalendarDayOff)dayOff) };
      }
      foreach (var (key, value) in workHour.Result.Data) {
        var newModel = value.Select(workHours => (ModelOutputMapEmployerCalendarWorkHour)workHours);
        result.TryAdd(key, new() { WorkingHours = newModel });
      }

      cache.AddExpirationGetUsersDaysOff(id, start, end);
      cache.AddExpirationGetUsersWorkHour(id, start, end);
      return new CacheResult<Dictionary<DateOnly, ModelOutputMapEmployerCalendar>>(result, time);
    });

    if (context.IfModifiedSince(time)) {
      return Results.StatusCode(304);
    }
    return Results.Ok(result);
  }
}
