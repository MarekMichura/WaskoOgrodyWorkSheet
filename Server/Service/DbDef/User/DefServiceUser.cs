namespace Wasko;

class DefServiceUser : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddHttpContextAccessor();
    builder.Services.AddScoped<IServiceUser, ServiceUser>();
  }
}