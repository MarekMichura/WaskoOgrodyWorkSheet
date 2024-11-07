namespace Wasko;

public static class ResponseWithCompressedFiles {
  private static readonly string[] FetchDest = ["script", "document"];
  private static readonly IReadOnlyDictionary<string, string> CompressionType = new Dictionary<string, string>() { { ".html", "text/html" }, { ".htm", "text/html" }, { ".js", "application/javascript" }, };

  private static async Task<bool> ReturnCompressedFile(string method, string filePath, HttpContext context)
  {
    var path = filePath + "." + method;
    if (!File.Exists(path)) return false;
    var response = context.Response;
    var headers = response.Headers;

    Console.WriteLine("Return file: " + path);
    headers.CacheControl = "public,max-age=31536000";
    headers.Expires = DateTime.UtcNow.AddMonths(1).ToString("R");
    headers.Remove("content-length");
    headers.Append("Content-Encoding", method);
    headers.Append("content-type", CompressionType[Path.GetExtension(filePath)]);
    await context.Response.SendFileAsync(path);

    return true;
  }

  public static async Task InvokeAsync(HttpContext context)
  {
    var headers = context.Request.Headers;
    var dest = headers["Sec-Fetch-Dest"].ToString();
    if (!FetchDest.Contains(dest)) {
      return;
    }

    var _env = context.RequestServices.GetRequiredService<IWebHostEnvironment>();
    var wwwRoot = _env.WebRootPath ?? _env.ContentRootPath;
    var path = context.Request.Path.ToString().Trim('/');
    var query = path.IndexOf('?', StringComparison.Ordinal);
    if (query != -1) path = path[..query];
    var serwerPath = dest == "document" ? Path.Combine(wwwRoot, "index.html") : Path.Combine(wwwRoot, path);

    if (!Path.Exists(serwerPath)) {
      return;
    }

    var acceptedCompression = headers.AcceptEncoding.ToString().Split(", ");
    if (acceptedCompression.Contains("br") && await ReturnCompressedFile("br", serwerPath, context)) return;
    if (acceptedCompression.Contains("gzip") && await ReturnCompressedFile("gzip", serwerPath, context)) return;
    if (acceptedCompression.Contains("deflate") && await ReturnCompressedFile("deflate", serwerPath, context)) return;
  }
}