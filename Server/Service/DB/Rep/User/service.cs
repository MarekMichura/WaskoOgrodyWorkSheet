namespace Wasko;

public class ServiceRepUser : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddTransient<IRepUser, RepUser>();
  }
}