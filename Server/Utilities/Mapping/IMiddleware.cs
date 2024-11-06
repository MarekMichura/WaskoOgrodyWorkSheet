namespace Wasko;

public interface IMiddleware {
  public ushort Priority => 32766;
  public void DefineMiddleware(WebApplication app);
}
