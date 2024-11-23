namespace Wasko;

public static class TokenGetUsersDaysOff {
  private static readonly TokenManager _tokenManager = new();
  private static string GetKey(string userID, DateOnly from, DateOnly to) =>
    $"{userID}_{from}_{to}";

  public static IChangeToken GetToken(string userID, DateOnly from, DateOnly to)
  {
    var key = GetKey(userID, from, to);
    return _tokenManager.GetToken(key).Token;
  }

  public static void Cancel(string userID, DateOnly from, DateOnly to)
  {
    var key = GetKey(userID, from, to);
    _tokenManager.Cancel(key);
  }

  public static void AddExpirationGetUsersDaysOff(this ICacheEntry cache, string userID, DateOnly from, DateOnly to)
  {
    cache.AddExpirationToken(GetToken(userID, from, to));
  }
}