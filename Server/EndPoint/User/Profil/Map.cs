namespace Wasko;

public static partial class MapUser {
  public static IResult MapProfil(IRepUser rep, HttpContext context)
  {
    var profil = rep.GetCurrentProfil(out var time);
    if (context.IfModifiedSince(time)) {
      return Results.StatusCode(304);
    }

    return Results.Ok(profil);
  }
}