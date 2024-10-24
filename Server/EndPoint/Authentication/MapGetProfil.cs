namespace Wasko;

static class MapGetProfil
{
  private static readonly MemoryCacheEntryOptions cacheOptions = new MemoryCacheEntryOptions()
      .SetSlidingExpiration(TimeSpan.FromSeconds(60))
      .SetPriority(CacheItemPriority.Low);

  public static IResult GetProfil([FromServices] IServiceUser rep, [FromServices] IMemoryCache cache, HttpContext httpContext)
  {
    var id = rep.GetCurrentUserID() ?? throw new NullReferenceException();
    var now = DateTime.Now;
    if (cache.TryGetValue(id, out var cacheData) && cacheData is ModelResultUserProfil profil)
    {
      if (httpContext.Request.Headers.TryGetValue("If-Modified-Since", out var since)
        && DateTime.TryParse(since, out var sinceTime)
        && sinceTime >= profil.Time)
      {
        return Results.StatusCode(304);
      }
      return Results.Ok(profil);
    }
    profil = rep.GetProfil();
    profil.Time = now;
    cache.Set(id, profil, cacheOptions);
    return Results.Ok(profil);
  }
}