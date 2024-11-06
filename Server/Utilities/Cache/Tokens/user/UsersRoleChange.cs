namespace Wasko;

public static class TokenUserOrProfilChange {
  private static readonly Dictionary<string, MyToken> _tokens = [];

  public static IChangeToken GetToken(string userID)
  {
    if (_tokens.TryGetValue(userID, out var myToken)) {
      return myToken.Token;
    }
    var source = new CancellationTokenSource();
    var token = new CancellationChangeToken(source.Token);
    _tokens.Add(userID, new(source, token));
    return token;
  }

  public static void Cancel(string userID)
  {
    if (_tokens.TryGetValue(userID, out var myToken)) {
      myToken.Source.Cancel();
      myToken.Source.Dispose();
      _tokens.Remove(userID);
    }
  }

  public static void AddExpirationUserProfil(this ICacheEntry cache, string id)
  {
    cache.AddExpirationToken(GetToken(id));
  }
}