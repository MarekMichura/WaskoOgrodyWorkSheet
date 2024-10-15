namespace Wasko;

public class EndPointWorkHours : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/AddWorkHours", MapWorkHours.WorkHours)
      .RequireAuthorization(static a => a.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Work");

    app.MapGet("/WorkLocation", MapWorkLocations.WorkLocation)
      .RequireAuthorization(static a => a.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Work");
  }
}