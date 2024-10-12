namespace Wasko;

class IdentityService : IService
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

    builder.Services.AddAuthorization(a =>
    {
      foreach (var b in StorageRole.Roles)
      {
        if (b.Name is not null)
        {
          a.AddPolicy(b.Name, c => c.RequireRole(b.Name));
        }
      }
    });
  }
}