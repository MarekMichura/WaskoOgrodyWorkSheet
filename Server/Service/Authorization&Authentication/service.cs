namespace Wasko;

internal class ServiceAuthorizationAuthentication : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddSession();
    builder.Services.AddIdentity<ModelUser, ModelRole>()
      .AddDefaultTokenProviders()
      .AddEntityFrameworkStores<DataBaseContext>();

    builder.Services.ConfigureApplicationCookie(static options => {
      options.Events.OnRedirectToAccessDenied = static context => {
        context.Response.StatusCode = StatusCodes.Status403Forbidden;
        return Task.CompletedTask;
      };
      options.Events.OnRedirectToLogin = static context => {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return Task.CompletedTask;
      };
    });

    builder.Services.AddAuthorization();
  }
}
