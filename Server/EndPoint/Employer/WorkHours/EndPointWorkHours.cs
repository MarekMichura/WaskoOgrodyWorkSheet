namespace Wasko;

class EndPointWorkHours : IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
    app.MapPost("/AddWorkHours", MapWorkHours.WorkHours)
      .RequireAuthorization(a => a.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Work");

    app.MapGet("/WorkLocation", MapWorkLocations.WorkLocation)
      .RequireAuthorization(a => a.RequireRole(nameof(BuildInRoles.Employer)))
      .WithTags("Work");
  }
}