using Microsoft.AspNetCore.Http.HttpResults;

class ModelInputAuthenticate
{
  public required string Login { get; init; }
  public required string Password { get; init; }
}

class ModelResultAuthenticate
{
  public bool Authenticated { get; set; }
  public ModelResultUserProfil? Profil { get; set; }
}

static class MapAuthenticate
{
  public static async Task<IResult> Authenticate(ModelInputAuthenticate map, IServiceUser rep, SignInManager<ModelUser> _sim)
  {
    await _sim.SignOutAsync();
    var user = await _sim.UserManager.FindByNameAsync(map.Login);

    if (user is null)
      return Results.Ok(new ModelResultAuthenticate { Authenticated = false });
    if ((await _sim.PasswordSignInAsync(user, map.Password, false, false)).Succeeded)
    {
      return Results.Ok(new ModelResultAuthenticate { Authenticated = true });
    }
    return Results.Ok(new ModelResultAuthenticate { Authenticated = false });
    // if (await rep.Login(map.Login, map.Password))
    //   return Results.Ok(new ModelResultAuthenticate { Authenticated = true, Profil = rep.GetProfil() });
    // return Results.Ok(new ModelResultAuthenticate { Authenticated = false });
  }
}