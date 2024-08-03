using Microsoft.AspNetCore.Identity;

class UserEndPoint : IEndPoint
{
  public short Priority => 0;

  public void DefineEndpoint(WebApplication app)
  {
    app.MapPost("/Login", MapLogin.Login)
      .Accepts<MapLoginModel>("application/json")
      .WithTags("Login");

    app.MapGet("/User", MapUser.User)
      .WithTags("Login");

    app.MapGet("/Logout", MapLogOut.LogOut)
      .WithTags("Login");
  }
}