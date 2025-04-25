namespace Wasko;

public static partial class Extend {
  public static string SafeStringPath(this string path) =>
    path.Split("/").Select(Uri.EscapeDataString).Aggregate((a, b) => a + "/" + b);

  public static string GetRefererPath(this HttpRequest request, string defaultValue = "")
  {
    if (request.Headers.TryGetValue("Referer", out var referer) && Uri.TryCreate(referer, UriKind.Absolute, out var uri)) {
      return uri.AbsolutePath;
    }

    return defaultValue;
  }
}