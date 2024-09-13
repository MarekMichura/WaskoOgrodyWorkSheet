class EndPointSPA : IService, IEndPoint
{
  private const string AppPath = "./wwwroot";
  public short Priority => short.MinValue;

  public void DefineEndPoint(WebApplication app)
  {
    app.UseStaticFiles();

    if (app.Environment.IsDevelopment())
      SpaDevelopment(app);
    else SpaRelease(app);
  }

  private void SpaDevelopment(WebApplication app)
  {
    app.UseSpa(spa =>
      spa.UseProxyToSpaDevelopmentServer("http://html-development:3000"));
  }

  private void SpaRelease(WebApplication app)
  {
    app.UseSpa(spa =>
    {
      spa.Options.SourcePath = AppPath;
      spa.ApplicationBuilder.UseStaticFiles(new StaticFileOptions
      {
        FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.ContentRootPath, AppPath))
      });
    });
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    if (!builder.Environment.IsDevelopment())
      builder.Services.AddSpaStaticFiles(con => con.RootPath = AppPath);
  }
}