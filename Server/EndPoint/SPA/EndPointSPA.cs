namespace Wasko;

public class EndPointSPA : IService, IMiddleware
{
  private const string AppPath = "./wwwroot";
  public short Priority => short.MinValue;

  public void DefineEndPoint(WebApplication app)
  {
    app.UseStaticFiles();

    if (app.Environment.IsDevelopment())
      SpaDevelopment(app);
    else
      SpaRelease(app, app.Environment.ContentRootPath);
  }

  private static void SpaDevelopment(IApplicationBuilder app) => app.UseSpa(static spa =>
    spa.UseProxyToSpaDevelopmentServer("http://html-development:3000"));

  private static void SpaRelease(IApplicationBuilder app, string contentRootPath) => app.UseSpa(spa =>
    {
      spa.Options.SourcePath = AppPath;
      spa.ApplicationBuilder.UseStaticFiles(new StaticFileOptions
      {
        FileProvider = new PhysicalFileProvider(Path.Combine(contentRootPath, AppPath))
      });
    });

  public void DefineService(WebApplicationBuilder builder)
  {
    if (!builder.Environment.IsDevelopment())
    {
      builder.Services.AddSpaStaticFiles(static con => con.RootPath = AppPath);
    }
  }
}