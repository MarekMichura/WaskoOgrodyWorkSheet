namespace Wasko;

class EndPointAuthentication : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/Authenticate", MapAuthenticate.Authenticate)
      .Accepts<ModelInputAuthenticate>("application/json")
      .WithTags("Authorization");
    app.MapPost("/Logout", MapAuthenticate.LogOut)
      .WithTags("Authorization");
    app.MapGet("/GetProfil", MapGetProfil.GetProfil)
      .RequireAuthorization()
      .WithTags("Authorization");
  }
}
