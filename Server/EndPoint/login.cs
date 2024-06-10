
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;

class LoginEndPoint : IEndPoint
{
  public short Priority => 0;

  public void DefineEndpoint(WebApplication app)
  {
    app.MapPost("/Login", Login)
      .Accepts<LoginModel>("application/json")
      .WithTags("Login");

    app.MapGet("/Logout", Logout);
  }

  private class LoginModel
  {
    public required string Login { get; set; }
    public required string Password { get; set; }
  };

  private static async Task<IResult> Login(LoginModel model, UserManager<ModelUser> userManager, SignInManager<ModelUser> signInManager)
  {
    await signInManager.SignOutAsync();
    var user = await userManager.FindByNameAsync(model.Login);

    if (user is not null && (await signInManager.PasswordSignInAsync(user, model.Password, false, false)).Succeeded)
      return Results.Ok(await userManager.GetRolesAsync(user));
    return Results.Unauthorized();
  }

  private static async Task<IResult> Logout(SignInManager<ModelUser> signInManager)
  {
    await signInManager.SignOutAsync();
    return Results.Ok();
  }
}