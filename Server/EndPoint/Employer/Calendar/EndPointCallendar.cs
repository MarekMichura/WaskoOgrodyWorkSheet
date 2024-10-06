
namespace Wasko;

class Calendar : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/CalendarData", MapCalendarData.CalendarData)
      .RequireAuthorization(a => a.RequireRole(nameof(BuildInRoles.Employer)));
  }
}