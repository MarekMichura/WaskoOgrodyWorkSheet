namespace Wasko;

static class MapAuthenticate
{
  public static async Task<IResult> Authenticate(ModelInputAuthenticate map, IServiceUser rep)
  {
    if (await rep.Login(map.Login, map.Password))
    {
      return Results.Ok(new ModelResultAuthenticate { Authenticated = true, Profil = rep.GetProfil() });
    }

    return Results.Ok(new ModelResultAuthenticate { Authenticated = false });
  }

  public static async Task<IResult> LogOut(SignInManager<ModelUser> _sim)
  {
    await _sim.SignOutAsync();
    return Results.Ok();
  }
}