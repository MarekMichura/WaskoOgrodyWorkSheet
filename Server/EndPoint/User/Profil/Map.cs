namespace Wasko;

public static partial class MapUser {
  public static async Task<IResult> MapProfil(IRepUser rep, HttpContext context, IWebHostEnvironment environment)
  {
    if (environment.IsDevelopment())
      Thread.Sleep(1000);

    var id = rep.GetCurrentID() ?? throw new NullReferenceException();
    var (profil, time) = await rep.GetUserProfilAsync(id);
    if (context.IfModifiedSince(time)) {
      return Results.StatusCode(304);
    }

    return Results.Ok(profil);
  }
}
