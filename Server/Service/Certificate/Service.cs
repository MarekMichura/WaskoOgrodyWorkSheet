namespace Wasko;

public class ServiceCertificate {

  public void DefineService(WebApplicationBuilder builder)
  {
    if (builder.Environment.IsProduction()) {
      builder.Services.AddDataProtection()
        .PersistKeysToFileSystem(new DirectoryInfo("/home/app/.aspnet/DataProtection-Keys"))
        .ProtectKeysWithCertificate("thumbprint-of-your-cert");
    }
  }
}
