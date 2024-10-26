namespace Wasko;

public class EndPointAuthentication : IMiddleware
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/Api/v1/Authenticate", MapAuthenticate.Authenticate)
      .Accepts<ModelInputAuthenticate>("application/json")
      .WithTags("Authorization");
    app.MapPost("/Api/v1/Logout", MapAuthenticate.LogOut)
      .WithTags("Authorization");
    app.MapGet("/Api/v1/GetProfil", MapGetProfil.GetProfil)
      .RequireAuthorization()
      .WithTags("Authorization");
  }
}
