namespace Wasko;

using Dic = Dictionary<DateOnly, ModelResultCalendarData>;

static class MapCalendarData
{
  private static string GenCacheKey(DateOnly start, DateOnly end, string? userID) =>
    string.Format("{0}-{1}-{2}-{3}", "CalendarData", userID, start, end);

  private static readonly MemoryCacheEntryOptions cacheOptions = new MemoryCacheEntryOptions()
    .SetSlidingExpiration(TimeSpan.FromSeconds(60))
    .SetPriority(CacheItemPriority.Low);

  public static IResult CalendarData([FromBody] ModelInputCalendar model,
                                     [FromServices] IServiceCalendar calendar,
                                     [FromServices] IServiceUser user,
                                     [FromServices] IMemoryCache cache,
                                     HttpContext httpContext)
  {
    var now = DateTime.Now;
    var cacheKey = GenCacheKey(model.Start, model.End, user.GetCurrentUserID() ?? throw new NullReferenceException());
    if (cache.TryGetValue(cacheKey, out var outPut) && outPut is ModelResultCalendar hit)
    {
      if (httpContext.Request.Headers.TryGetValue("If-Modified-Since", out var since)
        && DateTime.TryParse(since, out var sinceTime)
        && sinceTime >= hit.Time)
      {
        // Console.WriteLine("Modification hit");
        return Results.StatusCode(304);
      }
      httpContext.Response.Headers["cache-hit"] = "true";
      return Results.Ok(new ModelResultCalendar() { Data = hit.Data, Time = now });
    }

    var data = calendar.GetData(model.Start, model.End);

    var result = new Dic();
    WorkHours(result, data.WorkHours);
    DayOffDates(result, data.DayOffDates, model.End);
    DayOffExpression(result, data.DayOffExpressions, model.Start, model.End);

    outPut = new ModelResultCalendar() { Data = result, Time = now };
    cache.Set(cacheKey, outPut, cacheOptions);

    Console.WriteLine("Cache fail");
    return Results.Ok(outPut);
  }

  private static void DayOffDates(Dic dates, IEnumerable<ModelDayOffDate> daysOff, DateOnly rangeEnd)
  {
    foreach (var dayOff in daysOff)
    {
      var start = dayOff.StartDate;
      var end = dayOff.EndDate ?? dayOff.StartDate;
      if (dayOff.StopActive is not null && dayOff.StopActive < end)
        end = dayOff.StopActive ?? throw new NullReferenceException();
      if (rangeEnd < end)
        end = rangeEnd;

      var dayStart = start.DayNumber;
      var daysDifference = end.DayNumber - start.DayNumber + 1;

      for (int i = 0; i < daysDifference; i++)
      {
        var date = DateOnly.FromDayNumber(dayStart + i);
        if (!dates.ContainsKey(date))
          dates.TryAdd(date, new ModelResultCalendarData());
        dates[date].DaysOff.Add(dayOff);
      }
    }
  }

  private static void DayOffExpression(Dic dates, IEnumerable<ModelDayOffExpression> daysOff, DateOnly rangeStart, DateOnly rangeEnd)
  {
    foreach (var dayOff in daysOff)
    {
      foreach (var date in ConvertDayOffExpression.ConvertToDates(dayOff, rangeStart, rangeEnd))
      {
        if (!dates.ContainsKey(date))
          dates.TryAdd(date, new ModelResultCalendarData());
        dates[date].DaysOff.Add(dayOff);
      }
    }
  }

  private static void WorkHours(Dic dates, IEnumerable<ModelWorkHour> workHours)
  {
    foreach (var workHour in workHours)
    {
      if (!dates.ContainsKey(workHour.Date))
        dates.TryAdd(workHour.Date, new ModelResultCalendarData());
      dates[workHour.Date].WorkingHours.Add(workHour);
    }
  }
}