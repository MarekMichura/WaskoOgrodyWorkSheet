namespace Wasko;

public static partial class MapUser {
  public static async Task<IResult> MapLogoutForm(IRepUser rep, HttpRequest request, IWebHostEnvironment environment)
  {
    var result = await MapLogout(rep, environment);

    if (result is Ok) {
      var referer = request.GetRefererPath("/profil");
      return Results.Redirect($"/login?redirect={referer}");
    }

    return Results.Redirect(request.GetRefererPath("/login"));
  }

  public static async Task<IResult> MapLogout(IRepUser rep, IWebHostEnvironment environment)
  {
    if (environment.IsDevelopment()) Thread.Sleep(1000);

    await rep.Logout();
    return Results.Ok();
  }
}
