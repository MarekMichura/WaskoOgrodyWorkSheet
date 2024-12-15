namespace Wasko;

public class EndPointSwagger : IMiddleware {
  public ushort Priority { get; } = 200;

  public void DefineMiddleware(WebApplication app)
  {
    if (app.Environment.IsDevelopment()) {
      app.UseSwagger();
      app.UseSwaggerUI();
    }
  }
}
