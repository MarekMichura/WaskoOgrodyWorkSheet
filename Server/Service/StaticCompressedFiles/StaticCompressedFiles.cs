namespace Wasko;

public class StaticCompressedFiles(RequestDelegate next, IWebHostEnvironment env)
{
  private readonly RequestDelegate _next = next;
  private readonly IWebHostEnvironment _env = env;

  public async Task InvokeAsync(HttpContext context)
  {
    var headers = context.Request.Headers;
    var wwwRoot = _env.WebRootPath;
    var path = context.Request.Path.ToString();
    var serwerPath = wwwRoot + context.Request.Path.ToString();
    if (path.EndsWith(".js"))
    {
      if (headers.AcceptEncoding.ToString().Contains("br"))
      {
        var brPath = serwerPath + "br";
        if (File.Exists(brPath))
        {
          context.Response.Headers.CacheControl = "public,max-age=31536000";
          context.Response.Headers.Expires = DateTime.UtcNow.AddMonths(1).ToString("R");
          context.Response.Headers.Append("Content-Encoding", "br");
          context.Response.Headers.Append("Content-Type", "text/javascript");
          await context.Response.SendFileAsync(brPath);
          return;
        }
      }

      if (headers.AcceptEncoding.ToString().Contains("gzip"))
      {
        var brPath = serwerPath + "gzip";
        if (File.Exists(brPath))
        {
          context.Response.Headers.CacheControl = "public,max-age=31536000";
          context.Response.Headers.Expires = DateTime.UtcNow.AddMonths(1).ToString("R");
          context.Response.Headers.Append("Content-Encoding", "br");
          context.Response.Headers.Append("Content-Type", "text/javascript");
          await context.Response.SendFileAsync(brPath);
          return;
        }
      }
    }
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