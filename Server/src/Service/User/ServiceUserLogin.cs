partial class ServiceUser
{
  public async Task<bool> Login(string login, string password)
  {
    await _sim.SignOutAsync();
    var user = await _sim.UserManager.FindByNameAsync(login);

    if (user is null)
      return false;
    if ((await _sim.PasswordSignInAsync(user, password, false, false)).Succeeded)
    {
      return true;
    }
    return false;
  }
}