namespace Wasko;

public static partial class Extend {
  public static bool IfModifiedSince(this HttpContext context, DateTime time)
  {
    var ifModifiedSince = context.Request.Headers.IfModifiedSince.ToString();
    return DateTime.TryParse(ifModifiedSince, out var since) && time < since;
  }
}
