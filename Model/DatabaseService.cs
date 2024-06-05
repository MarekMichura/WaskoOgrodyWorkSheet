using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public class DatabaseService : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    var connectionString = builder.Configuration.GetSection("Database")["ConnectionString"];

    builder.Services.AddDbContext<DataBaseConnect>(a => a.UseSqlite(connectionString));
    builder.Services.AddControllersWithViews();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSession();

    builder.Services.AddIdentity<ModelUser, IdentityRole>(a =>
    {
      a.User.RequireUniqueEmail = true;
    }).AddEntityFrameworkStores<DataBaseConnect>();

    builder.Services.AddAuthorization(a =>
    {
      ModelUser.DefaultRoles.ForEach(x => a.AddPolicy(x.Name ?? "", y => y.RequireRole(x.Name ?? "")));
    });
  }
}
