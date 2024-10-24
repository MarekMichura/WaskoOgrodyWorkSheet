namespace Wasko;

public class Calendar : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/Api/v1/CalendarData", MapCalendarData.CalendarData)
      .RequireAuthorization(static a => a.RequireRole(nameof(BuildInRoles.Employer)));
  }
}