partial class ServiceUser
{
  public async Task<bool> Login(string login, string password)
  {
    await _sim.SignOutAsync();
    var user = await _sim.UserManager.FindByNameAsync(login);

    return user is not null && (await _sim.PasswordSignInAsync(user, password, false, false)).Succeeded;
  }
}
