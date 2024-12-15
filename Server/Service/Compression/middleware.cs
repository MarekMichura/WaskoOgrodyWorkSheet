namespace Wasko;

internal class MiddlewareCompression : IMiddleware {
  public ushort Priority => 64600;
  public void DefineMiddleware(WebApplication app) { app.UseResponseCompression(); }
}

internal class MiddlewareStaticCompression : IMiddleware {
  public ushort Priority => 65100;
  public void DefineMiddleware(WebApplication app)
  {
    app.UseMiddleware<ResponseClientStaticFileMiddleware>();
    app.UseStaticFiles();
  }
}
