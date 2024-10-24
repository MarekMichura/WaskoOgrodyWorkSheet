namespace Wasko;

public class EndPointWorkHours : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/Api/v1/AddWorkHours", MapWorkHours.WorkHours)
      .RequireAuthorization(static a => a.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Work");

    app.MapGet("/Api/v1/WorkLocation", MapWorkLocations.WorkLocation)
      .RequireAuthorization(static a => a.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Work");
  }
}