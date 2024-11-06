namespace Wasko;

public static partial class Extend {
  public static bool IfModifiedSince(this HttpContext context, DateTime time)
  {
    if (DateTime.TryParse(context.Request.Headers.IfModifiedSince.ToString(), out var since)) {
      return time <= since;
    }
    return false;
  }
}