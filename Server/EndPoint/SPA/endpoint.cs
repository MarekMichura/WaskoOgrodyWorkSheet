namespace Wasko;

public class EndPointSpa : IMiddleware {
  public ushort Priority => 0;

  public void DefineMiddleware(WebApplication app)
  {
    app.MapReverseProxy();
  }
}
