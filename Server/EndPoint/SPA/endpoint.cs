namespace Wasko;

public class EndPointSpa : IMiddleware {
  internal const string rootPath = "wwwroot/";
  public ushort Priority => 0;

  public void DefineMiddleware(WebApplication app)
  {
    if (app.Environment.IsDevelopment()) {
      var client = Environment.GetEnvironmentVariable("client") ?? throw new NullReferenceException();
      app.UseSpa(spa => spa.UseProxyToSpaDevelopmentServer(client));
    }
    else {
      app.UseSpa(spa => {
        spa.Options.SourcePath = rootPath;
        spa.ApplicationBuilder.UseSpaStaticFiles(new StaticFileOptions {
          FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.ContentRootPath, rootPath))
        });
      });
    }
  }
}
