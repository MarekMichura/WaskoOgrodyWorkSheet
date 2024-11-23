namespace Wasko;

public static class TokenRoleChange {
  private static readonly TokenManager _tokenManager = new();

  public static IChangeToken GetToken(string roleID)
  {
    return _tokenManager.GetToken(roleID).Token;
  }

  public static void Cancel(string roleID)
  {
    _tokenManager.Cancel(roleID);
  }

  public static void AddExpirationRole(this ICacheEntry cache, IEnumerable<ModelRole> roles)
  {
    foreach (var model in roles) {
      cache.AddExpirationToken(GetToken(model.Id));
    }
  }
}