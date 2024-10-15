namespace Wasko;

public class DefServiceWork : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddScoped<IServiceWork, ServiceWork>();
  }
}