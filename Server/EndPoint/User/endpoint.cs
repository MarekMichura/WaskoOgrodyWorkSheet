namespace Wasko;

public class EndPointUser : IMiddleware {
  public void DefineMiddleware(WebApplication app)
  {
    app.MapPost("/api/v1.0/authenticate", MapUser.MapAuthenticate)
      .WithTags("User")
      .WithOpenApi()
      .Accepts<ModelInputMapAuthenticate>("application/json")
      .Produces<ModelOutPutMapAuthenticate>(StatusCodes.Status200OK)
      .Produces(StatusCodes.Status400BadRequest);

    app.MapGet("/api/v1.0/logout", MapUser.MapLogout)
      .WithTags("User")
      .WithOpenApi()
      .Produces(StatusCodes.Status200OK);

    app.MapGet("/api/v1.0/profile", MapUser.MapProfil)
      .RequireAuthorization()
      .WithTags("User")
      .Produces<ModelUserProfil>(StatusCodes.Status200OK)
      .Produces(StatusCodes.Status401Unauthorized);
  }
}
