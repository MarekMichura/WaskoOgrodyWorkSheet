namespace Wasko;

public class ServiceRepWorkHour : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddTransient<IRepWorkHour, RepWorkHour>();
  }
}