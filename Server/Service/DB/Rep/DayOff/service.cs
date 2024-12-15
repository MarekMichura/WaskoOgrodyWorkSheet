namespace Wasko;

public class ServiceRepDayOff : IService {
  public void DefineService(WebApplicationBuilder builder) { builder.Services.AddTransient<IRepDayOff, RepDayOff>(); }
}
