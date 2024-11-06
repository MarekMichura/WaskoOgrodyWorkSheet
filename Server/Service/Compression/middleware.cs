namespace Wasko;

class MiddlewareCompression : IMiddleware {
  public ushort Priority => 64600;
  public void DefineMiddleware(WebApplication app)
  {
    app.UseResponseCompression();
  }
}

class MiddlewareStaticCompression : IMiddleware {
  public ushort Priority => 65100;
  public void DefineMiddleware(WebApplication app)
  {
    app.UseMiddleware<ResponseWithCompressedFiles>();
  }
}