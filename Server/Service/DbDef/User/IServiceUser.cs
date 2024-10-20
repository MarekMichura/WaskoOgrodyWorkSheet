namespace Wasko;

public interface IServiceUser
{
  ModelUser? GetCurrentUser();
  public ModelResultUserProfil GetProfil();
  public Task<bool> Login(string login, string password);
}
