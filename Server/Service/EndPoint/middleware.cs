namespace Wasko;

internal class MiddlewareEndPoint : IMiddleware {
  public ushort Priority => 64500;
  public void DefineMiddleware(WebApplication app)
  {
    app.UseEndpoints(static endpoint => { });
  }
}