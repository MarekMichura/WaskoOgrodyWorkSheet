namespace Wasko;

internal class ServiceCache : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddDistributedMemoryCache();
    builder.Services.AddMemoryCache();
  }
}
