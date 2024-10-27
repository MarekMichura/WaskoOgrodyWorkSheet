namespace Wasko;

public class StaticCompressedFiles(RequestDelegate next, IWebHostEnvironment env)
{
  private readonly RequestDelegate _next = next;
  private readonly IWebHostEnvironment _env = env;

  private readonly string[] FetchDest = ["script", "document"];
  private static readonly IReadOnlyDictionary<string, string> CompressionType = new Dictionary<string, string>() {
    {".txt","text/plain"},
    { ".html", "text/html"},
    { ".htm", "text/html"},
    { ".css", "text/css"},
    { ".js", "application/javascript"},
    { ".csv", "text/csv"},
    { ".xml", "text/xml"},
    { ".json", "application/json"},
    { ".pdf", "application/pdf"},
    { ".zip", "application/zip"},
    { ".gz", "application/gzip"},
    { ".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
    { ".xls", "application/vnd.ms-excel"},
    { ".doc", "application/msword"},
    { ".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
    { ".ppt", "application/vnd.ms-powerpoint"},
    { ".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"},
    { ".jpg", "image/jpeg"},
    { ".jpeg", "image/jpeg"},
    { ".png", "image/png"},
    { ".gif", "image/gif"},
    { ".webp", "image/webp"},
    { ".svg", "image/svg+xml"},
    { ".bmp", "image/bmp"},
    { ".tiff", "image/tiff"},
    { ".ico", "image/vnd.microsoft.icon"},
    { ".mp3", "audio/mpeg"},
    { ".wav", "audio/wav"},
    { ".ogg", "audio/ogg"},
    { ".aac", "audio/aac"},
    { ".mid", "audio/midi"},
    { ".midi", "audio/midi"},
    { ".mp4", "video/mp4"},
    { ".mpeg", "video/mpeg"},
    { ".webm", "video/webm"},
    { ".ogv", "video/ogg"},
    { ".3gp", "video/3gpp"},
    { ".3g2", "video/3gpp2"},
    { ".woff", "font/woff"},
    { ".woff2", "font/woff2"},
    { ".eot", "application/vnd.ms-fontobject"},
    { ".ttf", "font/ttf"},
    { ".otf", "font/otf"},
    { ".7z", "application/x-7z-compressed"},
    { ".rar", "application/x-rar-compressed"},
    { ".form", "application/x-www-form-urlencoded"},
  };

  private static async Task<bool> ReturnCompressedFile(string method, string filePath, HttpContext context)
  {
    var path = filePath + "." + method;
    Console.WriteLine("I am trying to get compress file:\n\t" + path);
    if (!File.Exists(path)) return false;
    Console.WriteLine("\tFile exist and i will return them" + path);
    var response = context.Response;
    var headers = response.Headers;

    headers.CacheControl = "public,max-age=31536000";
    headers.Expires = DateTime.UtcNow.AddMonths(1).ToString("R");
    headers.Append("Content-Encoding", method);
    headers.Append("content-type", CompressionType[Path.GetExtension(filePath)]);
    await context.Response.SendFileAsync(path);

    return true;
  }

  public async Task InvokeAsync(HttpContext context)
  {
    if (_env.IsDevelopment()) { await _next(context); return; }
    var headers = context.Request.Headers;
    var dest = headers["Sec-Fetch-Dest"].ToString();
    if (!FetchDest.Contains(dest))
    {
      await _next(context);
      return;
    }

    var wwwRoot = _env.WebRootPath;
    var path = context.Request.Path.ToString().Trim('/');
    var query = path.IndexOf('?', StringComparison.Ordinal);
    if (query != -1) path = path[..query];
    var serwerPath = dest == "document" && !path.EndsWith(".png") && !path.EndsWith(".jpg") ?
      Path.Combine(wwwRoot, "index.html") : Path.Combine(wwwRoot, path);

    var acceptedCompression = headers.AcceptEncoding.ToString().Split(", ");
    if (acceptedCompression.Contains("br") && await ReturnCompressedFile("br", serwerPath, context)) return;
    if (acceptedCompression.Contains("gzip") && await ReturnCompressedFile("gzip", serwerPath, context)) return;
    if (acceptedCompression.Contains("deflate") && await ReturnCompressedFile("deflate", serwerPath, context)) return;

    Console.WriteLine("\tCompressed file are not for me");
    await _next(context);
  }
}

public static class RequestStaticCompressedFilesMiddleware
{
  public static IApplicationBuilder UseStaticCompressedFiles(this IApplicationBuilder builder)
  {
    return builder.UseMiddleware<StaticCompressedFiles>();
  }
}