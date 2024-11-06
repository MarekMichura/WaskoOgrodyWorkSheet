namespace Wasko;

class MiddlewareRouting : IMiddleware {
  public ushort Priority => 65000;
  public void DefineMiddleware(WebApplication app)
  {
    app.UseRouting();
  }
}