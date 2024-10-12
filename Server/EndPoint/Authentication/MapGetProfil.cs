namespace Wasko;

static class MapGetProfil
{
  public static IResult GetProfil(IServiceUser rep)
  {
    return Results.Ok(rep.GetProfil());
  }
}