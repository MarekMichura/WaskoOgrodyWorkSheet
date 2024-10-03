namespace Wasko;

class DatabaseService : IService
{
  public void DefineService(WebApplicationBuilder builder)
  {
    var connectionStr = builder.Configuration.GetSection("Database")["Connect"] ?? throw new NullReferenceException();
    var password = Environment.GetEnvironmentVariable("DB_PASSWORD");
    connectionStr = connectionStr.Replace("${PASSWORD}", password);

    builder.Services.AddDbContext<DatabaseContext>(a => { a.UseSqlServer(connectionStr, a => { a.EnableRetryOnFailure(); }); });
  }
}