namespace Wasko;

public class Calendar : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/CalendarData", MapCalendarData.CalendarData)
      .RequireAuthorization(static a => a.RequireRole(nameof(BuildInRoles.Employer)));
  }
}