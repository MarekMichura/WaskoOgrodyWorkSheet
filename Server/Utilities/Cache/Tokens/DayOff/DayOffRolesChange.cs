namespace Wasko;

public static class TokenDayOffRolesChange {
  private static readonly TokenManager _tokenManager = new();

  public static IChangeToken GetToken(string roleID)
  {
    return _tokenManager.GetToken(roleID).Token;
  }

  public static void Cancel(string roleID)
  {
    _tokenManager.Cancel(roleID);
  }

  public static void AddExpirationDayOffRoles(this ICacheEntry cache, IEnumerable<ModelRole> roles)
  {
    foreach (var role in roles) {
      cache.AddExpirationToken(GetToken(role.Id));
    }
  }
}