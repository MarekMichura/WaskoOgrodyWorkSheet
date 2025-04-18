namespace Wasko;

public class EndPointSwagger : IMiddleware {
  public ushort Priority { get; } = 200;

  public void DefineMiddleware(WebApplication app)
  {
    if (app.Environment.IsDevelopment()) {
      app.MapGet("/api/v1.0/Test", () => "test");

      app.UseSwagger(swagger => {
        swagger.RouteTemplate = "api/v1.0/swagger/{documentName}/swagger.json";
      });

      app.UseSwaggerUI(swagger => {
        swagger.SwaggerEndpoint("/api/v1.0/swagger/v1/swagger.json", "My API V1");
        swagger.RoutePrefix = "api/v1.0/swagger";
      });
    }
  }
}
