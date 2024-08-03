using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.FileProviders;

public class SinglePageApplicationEndPoint : IEndPoint, IService
{
  private const string AppPath = "build";
  private const string AppPathDevelopment = "../Client/";
  public short Priority => short.MinValue;

  public void DefineEndpoint(WebApplication app)
  {
    app.UseSpa(spa =>
    {
      if (app.Environment.IsDevelopment())
      {
        spa.Options.SourcePath = AppPathDevelopment;
        spa.UseReactDevelopmentServer(npmScript: "start");
        // spa.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
      }
      else
      {
        spa.Options.SourcePath = AppPath;
        spa.ApplicationBuilder.UseStaticFiles(new StaticFileOptions
        {
          FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.ContentRootPath, AppPath))
        });
      }
    });
    app.UseSwagger();
    app.UseSwaggerUI();
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    if (builder.Environment.IsDevelopment())
      builder.Services.AddSpaStaticFiles(con => con.RootPath = AppPathDevelopment);
    else
      builder.Services.AddSpaStaticFiles(con => con.RootPath = AppPath);
    builder.Services.AddSwaggerGen(a => { });
  }
}