namespace Wasko;

public class IdentityService : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddIdentity<ModelUser, ModelRole>()
      .AddDefaultTokenProviders()
      .AddEntityFrameworkStores<DatabaseContext>();

    builder.Services.ConfigureApplicationCookie(options =>
    {
      options.Events.OnRedirectToAccessDenied = context =>
      {
        context.Response.StatusCode = StatusCodes.Status403Forbidden;
        return Task.CompletedTask;
      };
      options.Events.OnRedirectToLogin = context =>
      {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return Task.CompletedTask;
      };
    });

    builder.Services.AddAuthorization(authorization =>
    {
      foreach (var roles in StorageRole.Roles)
      {
        if (roles.Name is not null)
        {
          authorization.AddPolicy(roles.Name, policy => policy.RequireRole(roles.Name));
        }
      }
    });
  }
}