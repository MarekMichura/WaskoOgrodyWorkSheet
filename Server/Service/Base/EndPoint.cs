namespace Wasko;

class EndPoint : IEndPoint, IService
{
  public short Priority => short.MinValue + 2;

  public void DefineEndPoint(WebApplication app)
  {
    if (!app.Environment.IsDevelopment())
      app.UseHsts();

    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.MapControllers();

    app.UseRouting();
    app.UseSession();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoint => { });
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddControllersWithViews();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSession();
  }
}