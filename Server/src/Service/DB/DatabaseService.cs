
class DatabaseService : IService, IEndPoint
{
  public void DefineEndPoint(WebApplication app)
  {
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    var connectionStr = builder.Configuration.GetSection("Database")["Connect"];

    builder.Services.AddDbContext<DatabaseContext>(a => a.UseSqlServer(connectionStr));
    builder.Services.AddIdentity<ModelUser, ModelRole>()
      .AddDefaultTokenProviders()
      .AddEntityFrameworkStores<DatabaseContext>();

    builder.Services.AddAuthorization(a =>
    {
      foreach (var b in StorageRole.Roles)
        a.AddPolicy(b.Name, c => c.RequireRole(b.Name));
    });
  }
}