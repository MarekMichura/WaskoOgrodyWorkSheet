namespace Wasko;

public interface IServiceUser
{
  string? GetCurrentUserID();
  ModelUser? GetCurrentUser();
  public ModelResultUserProfil GetProfil();
  public Task<bool> Login(string login, string password);
}
