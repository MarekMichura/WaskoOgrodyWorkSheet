namespace Wasko;

public static class TokenWorkHourUserChange {
  private static readonly Dictionary<string, MyToken> _tokens = [];

  public static IChangeToken GetToken(string roleID)
  {
    if (_tokens.TryGetValue(roleID, out var myToken)) {
      return myToken.Token;
    }
    var source = new CancellationTokenSource();
    var token = new CancellationChangeToken(source.Token);
    _tokens.Add(roleID, new(source, token));
    return token;
  }

  public static void Cancel(string roleID)
  {
    if (_tokens.TryGetValue(roleID, out var myToken)) {
      myToken.Source.Cancel();
      myToken.Source.Dispose();
      _tokens.Remove(roleID);
    }
  }

  public static void AddExpirationWorkHourUser(this ICacheEntry cache, string id)
  {
    cache.AddExpirationToken(GetToken(id));
  }
}