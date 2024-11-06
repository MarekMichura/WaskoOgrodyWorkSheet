namespace Wasko;

public static partial class MapUser {
  public static async Task<IResult> MapLogout(IRepUser rep)
  {
    await rep.Logout();
    return Results.Ok();
  }
}