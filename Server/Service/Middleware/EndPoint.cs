namespace Wasko;

public class UseMiddleware : IMiddleware, IService
{
  public short Priority => short.MinValue + 2;

  public void DefineEndPoint(WebApplication app)
  {
    app.UseStaticCompressedFiles();
    app.UseStaticFiles();
    app.MapControllers();

    app.UseRouting();
    app.UseSession();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseResponseCompression();
    app.UseEndpoints(static endpoint => { });
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddControllersWithViews()
      .AddJsonOptions(static options =>
      {
        options.JsonSerializerOptions.Converters.Add(new TimeOnlyJsonConverter());
        options.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
      });

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSession();

    builder.Services.AddResponseCompression(static options =>
    {
      options.EnableForHttps = true;
    });

    // builder.Services.AddHttpsRedirection(static options =>
    // {
    //     options.HttpsPort = 8081;
    // });

    // builder.Services.AddDataProtection()
    //     .ProtectKeysWithCertificate("thumbprint");
  }
}
