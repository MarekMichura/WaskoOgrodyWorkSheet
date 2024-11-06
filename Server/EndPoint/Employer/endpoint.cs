
namespace Wasko;

public class EndPointEmployer : IMiddleware {
  public void DefineMiddleware(WebApplication app)
  {
    app.MapGet("/api/v1.0/EmployerCalendar", MapEmployer.MapCalendar)
      .RequireAuthorization(authorization => authorization.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Employer")
      .Produces<Dictionary<DateOnly, ModelOutputMapEmployerCalendar>>(StatusCodes.Status200OK)
      .Produces(StatusCodes.Status401Unauthorized);
  }
}