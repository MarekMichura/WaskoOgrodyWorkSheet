namespace Wasko;

public static class TokenUserRolesChange {
  private static readonly TokenManager _tokenManager = new();

  public static IChangeToken GetToken(string userID)
  {
    return _tokenManager.GetToken(userID).Token;
  }

  public static void Cancel(string userID)
  {
    _tokenManager.Cancel(userID);
  }

  public static void AddExpirationUserRoles(this ICacheEntry cache, string id)
  {
    cache.AddExpirationToken(GetToken(id));
  }
}