namespace Wasko;

public static class TokenGetUsersDaysOff {
  private static readonly Dictionary<string, MyToken> _tokens = [];
  private static string GetKey(string userID, DateOnly from, DateOnly to) =>
    $"{userID}_{from}_{to}";

  public static IChangeToken GetToken(string userID, DateOnly from, DateOnly to)
  {
    var key = GetKey(userID, from, to);
    if (_tokens.TryGetValue(key, out var myToken)) {
      return myToken.Token;
    }
    var source = new CancellationTokenSource();
    var token = new CancellationChangeToken(source.Token);
    _tokens.Add(key, new(source, token));
    return token;
  }

  public static void Cancel(string userID, DateOnly from, DateOnly to)
  {
    var key = GetKey(userID, from, to);
    if (_tokens.TryGetValue(key, out var myToken)) {
      myToken.Source.Cancel();
      myToken.Source.Dispose();
      _tokens.Remove(key);
    }
  }

  public static void AddExpirationGetUsersDaysOff(this ICacheEntry cache, string userID, DateOnly from, DateOnly to)
  {
    cache.AddExpirationToken(GetToken(userID, from, to));
  }
}