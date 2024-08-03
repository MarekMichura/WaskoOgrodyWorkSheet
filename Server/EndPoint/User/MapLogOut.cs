using Microsoft.AspNetCore.Identity;

class MapLogOut
{
  public async static Task<IResult> LogOut(SignInManager<ModelUser> signInManager)
  {
    await signInManager.SignOutAsync();
    return Results.Ok();
  }
}