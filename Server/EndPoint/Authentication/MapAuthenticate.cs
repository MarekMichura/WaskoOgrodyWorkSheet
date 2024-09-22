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
  static public async Task<IResult> Authenticate(ModelInputAuthenticate map, IServiceUser rep, SignInManager<ModelUser> _sim)
  {
    if (await rep.Login(map.Login, map.Password))
      return Results.Ok(new ModelResultAuthenticate { Authenticated = true, Profil = rep.GetProfil() });
    return Results.Ok(new ModelResultAuthenticate { Authenticated = false });
  }
}