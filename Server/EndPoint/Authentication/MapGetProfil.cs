static class MapGetProfil
{
  static public IResult GetProfil(IServiceUser rep)
  {
    return Results.Ok(rep.GetProfil());
  }
}