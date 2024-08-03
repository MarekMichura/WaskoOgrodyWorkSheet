public class TransientDB : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddTransient<IRep, Rep>();
    builder.Services.AddTransient<ICalendarRep, CalendarRep>();
    builder.Services.AddTransient<IAdminRep, AdminRep>();
  }
}