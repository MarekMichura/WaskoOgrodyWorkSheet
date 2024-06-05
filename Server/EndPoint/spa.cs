using Microsoft.Extensions.FileProviders;

public class SinglePageApplicationEndPoint : IEndPoint, IService
{
  private const string AppPath = "build";
  public short Priority => short.MinValue;

  public void DefineEndpoint(WebApplication app)
  {
    app.UseSpa(spa =>
    {
      spa.Options.SourcePath = AppPath;

      if (app.Environment.IsDevelopment())
      {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
      }
      else
      {
        spa.ApplicationBuilder.UseStaticFiles(new StaticFileOptions
        {
          FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.ContentRootPath, AppPath))
        });
      }
    });
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddSpaStaticFiles(con => con.RootPath = AppPath);
  }
}