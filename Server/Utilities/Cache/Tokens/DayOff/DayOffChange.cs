namespace Wasko;

public static class TokenDayOffChange {
  private static readonly TokenManager _tokenManager = new();

  public static IChangeToken GetToken(string dayOfID)
  {
    return _tokenManager.GetToken(dayOfID).Token;
  }

  public static void Cancel(string dayOfID)
  {
    _tokenManager.Cancel(dayOfID);
  }

  public static void AddExpirationDayOff(this ICacheEntry cache, IEnumerable<ModelDayOff> dayOffs)
  {
    foreach (var dayOff in dayOffs) {
      cache.AddExpirationToken(GetToken(dayOff.ID));
    }
  }
}