namespace Wasko;

internal class MiddlewareAuthorizationAuthentication : IMiddleware {
  public ushort Priority => 64900;

  public void DefineMiddleware(WebApplication app)
  {
    app.UseSession();
    app.UseAuthentication();
    app.UseAuthorization();
  }
}