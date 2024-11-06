namespace Wasko;

public static partial class MapUser {
  public static async Task<IResult> MapAuthenticate(ModelInputMapAuthenticate model, IRepUser rep)
  {
    if (await rep.Login(model.Login, model.Password)) {
      return Results.Ok(new ModelOutPutMapAuthenticate { Authenticated = true, Profil = rep.GetCurrentProfil(out _) });
    }

    return Results.Ok(new ModelOutPutMapAuthenticate { Authenticated = false });
  }
}