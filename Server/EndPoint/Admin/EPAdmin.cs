using Microsoft.AspNetCore.Identity;

class AdminEndPoint : IEndPoint
{
  public short Priority => 0;

  public void DefineEndpoint(WebApplication app)
  {
    app.MapPost("/GetExcel", MapGetExcel.GetExcel)
      .Accepts<MapModelDateRange>("application/json")
      .RequireAuthorization(a => a.RequireRole("Admin"))
      .WithTags("Admin");

    app.MapGet("/GetExcel", MapGetExcel.GetExcel2)
      .RequireAuthorization(a => a.RequireRole("Admin"))
      .WithTags("Admin");
  }
}