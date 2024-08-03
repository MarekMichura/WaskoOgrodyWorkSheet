using Microsoft.AspNetCore.Identity;

public class MapLoginModel
{
  public required string Login { get; set; }
  public required string Password { get; set; }
};

class MapLogin
{
  public async static Task<IResult> Login(MapLoginModel model, SignInManager<ModelUser> signInManager)
  {
    await signInManager.SignOutAsync();
    var user = await signInManager.UserManager.FindByNameAsync(model.Login);

    if (user is not null && (await signInManager.PasswordSignInAsync(user, model.Password, false, false)).Succeeded)
      return Results.Ok(MapUser.GetUserData(user, (await signInManager.UserManager.GetRolesAsync(user)).ToArray()));
    return Results.Unauthorized();
  }
}

