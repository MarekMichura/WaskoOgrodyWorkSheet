
class PanelEndPoint : IEndPoint
{
  public short Priority => 0;

  public void DefineEndpoint(WebApplication app)
  {
    app.MapPost("/GetPanel", MapGetPanel.GetPanel)
      .Accepts<MapModelDateRange>("application/json")
      .WithTags("Panel")
      .RequireAuthorization();

    app.MapPost("/UpdatePanel", MapUpdatePanel.UpdatePanel)
      .Accepts<MapModelTimeRange>("application/json")
      .WithTags("Panel")
      .RequireAuthorization();
  }
}