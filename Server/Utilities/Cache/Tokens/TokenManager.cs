namespace Wasko;

public class TokenManager {
  private readonly ConcurrentDictionary<string, MyToken> _tokens = new();

  public MyToken GetToken(string id)
  {
    return _tokens.GetOrAdd(id, (_) => {
      var source = new CancellationTokenSource();
      var token = new CancellationChangeToken(source.Token);
      MyToken t = new() { Token = token, Source = source };
      return t;
    });
  }

  public MyToken? Cancel(string id)
  {
    if (!_tokens.TryRemove(id, out var removed)) {
      return null;
    }
    removed.Source.Cancel();
    removed.Source.Dispose();
    return removed;
  }
}