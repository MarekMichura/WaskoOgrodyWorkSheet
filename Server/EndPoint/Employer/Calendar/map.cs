namespace Wasko;

public static partial class MapEmployer {
  public static IResult MapCalendar([AsParameters] ModelInputMapEmployerCalendar model,
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

    var (time, result) = cache.GetOrCreate($"EmployerCalendar_{id}_{model.Start:yyyy-MM-dd}_{model.End:yyyy-MM-dd}", (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;

      var dayOff = repDayOff.GetUsersDaysOff(start, end, out var timeDayOff);
      var workHour = repWorkHour.GetUsersWorkHours(start, end, out var timeWorkHours);
      var result = new Dictionary<DateOnly, ModelOutputMapEmployerCalendar>();
      foreach (var (key, value) in dayOff) {
        result[key] = new() { DayOff = value.Select(dayOff => (ModelOutputMapEmployerCalendarDayOff)dayOff) };
      }
      foreach (var (key, value) in workHour) {
        var newModel = value.Select(workHours => (ModelOutputMapEmployerCalendarWorkHour)workHours);
        result.TryAdd(key, new());
        result[key].WorkHours = newModel;
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