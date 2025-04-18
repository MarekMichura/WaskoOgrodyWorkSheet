namespace Wasko;

public static partial class MapUser {
  public static async Task<IResult> MapLogoutForm(IRepUser rep, HttpRequest request)
  {
    var result = await MapLogout(rep);
    if (result is Ok<ModelOutPutMapAuthenticate> okResult && okResult.Value.Authenticated) {
      return Results.Redirect("/login");
    }

    return Results.Redirect(request.Headers.Referer.ToString());
  }

  public static async Task<IResult> MapLogout(IRepUser rep)
  {
    await rep.Logout();
    return Results.Ok();
  }
}
