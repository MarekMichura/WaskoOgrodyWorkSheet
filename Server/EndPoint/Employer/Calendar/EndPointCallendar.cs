namespace Wasko;

public class Calendar : IMiddleware
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/Api/v1/CalendarData", MapCalendarData.CalendarData)
      .RequireAuthorization(static authorization => authorization.RequireRole(nameof(BuildInRoles.Employer)));
  }
}