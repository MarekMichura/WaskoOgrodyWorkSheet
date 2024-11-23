namespace Wasko;

public class ResponseClientStaticFileMiddleware(RequestDelegate next) {
  private readonly RequestDelegate _next = next;
  private readonly FileExtensionContentTypeProvider _typeProvider = new();

  private static bool TryGetFile(string webPath, string root, string method, [NotNullWhen(true)] out string? path)
  {
    path = Path.Combine(root, method, webPath[1..]) + "." + method;
    return File.Exists(path);
  }

  private static bool TryGetIndex(string accept, string root, string method, [NotNullWhen(true)] out string? path)
  {
    path = Path.Combine(root, method, "index.html") + "." + method;
    return accept.Contains("text/html") && File.Exists(path);
  }

  private static bool TryGetCompressed(string accept, string webPath, string root, string method,
                                      [NotNullWhen(true)] out string? path, [NotNullWhen(true)] out string outMethod)
  {
    outMethod = method;
    return TryGetIndex(accept, root, method, out path) ||
           TryGetFile(webPath, root, method, out path);
  }

  public async Task InvokeAsync(HttpContext context, [FromServices] IWebHostEnvironment env)
  {
    if (context.GetEndpoint()?.RequestDelegate is not null) {
      await _next(context);
      return;
    }
    if (context.Request.Method != "GET") {
      await _next(context);
      return;
    }
    var methods = context.Request.Headers.AcceptEncoding.ToString().Split(", ");
    var accept = context.Request.Headers.Accept.ToString();
    var path = context.Request.Path;
    var root = env.WebRootPath;

    if (((methods.Contains("br") && TryGetCompressed(accept, path, root, "br", out var newPath, out var method)) ||
         (methods.Contains("gzip") && TryGetCompressed(accept, path, root, "gzip", out newPath, out method)) ||
         (methods.Contains("deflate") &&
          TryGetCompressed(accept, path, root, "deflate", out newPath, out method))) &&
        _typeProvider.TryGetContentType(newPath.TrimEnd(['.', .. method]), out var contentType)) {
      context.Response.Headers.CacheControl = "public, max-age=31536000";
      context.Response.Headers.ContentType = contentType;
      context.Response.Headers.Expires = DateTime.UtcNow.AddMonths(1).ToString("R");
      context.Response.Headers.ContentEncoding = method;
      context.Response.Headers.ContentLength = new FileInfo(newPath).Length;

      await context.Response.SendFileAsync(newPath);
      await context.Response.CompleteAsync();
      return;
    }

    await _next(context);
  }
}
