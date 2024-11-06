namespace Wasko;

public readonly struct MyToken(CancellationTokenSource source, IChangeToken token) {
  public readonly CancellationTokenSource Source { get; init; } = source;
  public readonly IChangeToken Token { get; init; } = token;
}
