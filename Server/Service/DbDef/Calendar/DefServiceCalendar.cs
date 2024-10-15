namespace Wasko;

public class DefServiceCalendar : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddHttpContextAccessor();
    builder.Services.AddScoped<IServiceCalendar, ServiceCalendar>();
  }
}