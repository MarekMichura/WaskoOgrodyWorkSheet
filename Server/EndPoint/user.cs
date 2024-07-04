
class UserEndPoint : IEndPoint
{
  public short Priority => 0;

  public void DefineEndpoint(WebApplication app)
  {
    app.MapGet("GetDays", () =>
    {

    })
      .RequireAuthorization();
  }
}