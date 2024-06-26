
using System.Net.Http.Headers;
using System.Security.Principal;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;
using Microsoft.IdentityModel.Tokens;

class LoginEndPoint : IEndPoint
{
  public short Priority => 0;

  public void DefineEndpoint(WebApplication app)
  {
    app.MapPost("/Login", Login)
      .Accepts<LoginModel>("application/json")
      .WithTags("Login");
    app.MapGet("Login", GetLogin)
      .WithTags("Login");

    app.MapGet("/Logout", Logout);
  }

  private class LoginModel
  {
    public required string Login { get; set; }
    public required string Password { get; set; }
  };

  private static async Task<IResult> GetLogin(HttpContext context, UserManager<ModelUser> userManager)
  {
    if (context.User.Identity is null)
      return Results.Unauthorized();
    if (!context.User.Identity.IsAuthenticated)
      return Results.Unauthorized();

    var user = await userManager.FindByNameAsync(context.User.Identity.Name ?? "");
    if (user is null)
      return Results.Unauthorized();

    var roles = await userManager.GetRolesAsync(user);
    return Results.Ok(roles);
  }

  private static async Task<IResult> Login(LoginModel model, SignInManager<ModelUser> signInManager)
  {
    await signInManager.SignOutAsync();
    var user = await signInManager.UserManager.FindByNameAsync(model.Login);

    if (user is not null && (await signInManager.PasswordSignInAsync(user, model.Password, false, false)).Succeeded)
      return Results.Ok(await signInManager.UserManager.GetRolesAsync(user));
    return Results.Unauthorized();
  }

  private static async Task<IResult> Logout(SignInManager<ModelUser> signInManager)
  {
    await signInManager.SignOutAsync();
    return Results.Ok();
  }
}