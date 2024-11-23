namespace Wasko;

public static class TokenDayOffUserChange {
  private static readonly TokenManager _tokenManager = new();

  public static IChangeToken GetToken(string userID)
  {
    return _tokenManager.GetToken(userID).Token;
  }

  public static void Cancel(string userID)
  {
    _tokenManager.Cancel(userID);
  }

  public static void AddExpirationDayOffUser(this ICacheEntry cache, string userID)
  {
    cache.AddExpirationToken(GetToken(userID));
  }
}
