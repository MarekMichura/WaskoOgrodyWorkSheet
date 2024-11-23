namespace Wasko;

public static partial class MapUser {
  public static async Task<IResult> MapAuthenticate(ModelInputMapAuthenticate model, IRepUser rep)
  {
    if (await rep.Login(model.Login, model.Password)) {
      var id = rep.GetCurrentID() ?? throw new NullReferenceException();
      var (profil, _) = await rep.GetUserProfilAsync(id);
      return Results.Ok(new ModelOutPutMapAuthenticate {
        Authenticated = true,
        Profile = profil
      });
    }

    return Results.Ok(new ModelOutPutMapAuthenticate { Authenticated = false });
  }
}
