namespace Wasko;

public interface IRepUser {
  public string? GetCurrentID();
  public Task<CacheResult<ModelRole[]>> GetUserRolesAsync(string id);
  public Task<CacheResult<ModelUserProfil>> GetUserProfilAsync(string id);

  public Task<bool> Login(string login, string password);
  public Task Logout();
}
