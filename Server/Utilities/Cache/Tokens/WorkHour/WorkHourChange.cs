namespace Wasko;

public static class TokenWorkHourChange {
  private static readonly TokenManager _tokenManager = new();

  public static IChangeToken GetToken(string workHoursID)
  {
    return _tokenManager.GetToken(workHoursID).Token;
  }

  public static void Cancel(string workHoursID)
  {
    _tokenManager.Cancel(workHoursID);
  }

  public static void AddExpirationWorkHour(this ICacheEntry cache, IEnumerable<ModelWorkHours> workHours)
  {
    foreach (var workHour in workHours) {
      cache.AddExpirationToken(GetToken(workHour.ID));
    }
  }
}
