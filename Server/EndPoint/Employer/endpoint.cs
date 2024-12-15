namespace Wasko;

public class EndPointEmployer : IMiddleware {
  public void DefineMiddleware(WebApplication app)
  {
    app.MapGet("/api/v1.0/GetEmployerCalendar", MapEmployer.MapCalendarAsync)
      .RequireAuthorization(authorization => authorization.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Employer")
      .Produces<Dictionary<DateOnly, ModelOutputMapEmployerCalendar>>(StatusCodes.Status200OK)
      .Produces(StatusCodes.Status401Unauthorized);

    app.MapPost("/api/v1.0/SetWorkHours", MapEmployer.MapSetWorkingHour)
      .RequireAuthorization(authorization => authorization.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Employer")
      .Produces(StatusCodes.Status401Unauthorized);

    app.MapPost("/api/v1.0/GetWorkLocations", () => { });
  }
}
