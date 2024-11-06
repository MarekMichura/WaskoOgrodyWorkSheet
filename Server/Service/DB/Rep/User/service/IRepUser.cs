namespace Wasko;

public interface IRepUser {
  public string? GetCurrentID();
  public IEnumerable<ModelRole> GetCurrentRoles(out DateTime cacheTime);
  public ModelUserProfil GetCurrentProfil(out DateTime cacheTime);

  public Task<bool> Login(string login, string password);
  public Task Logout();
}
