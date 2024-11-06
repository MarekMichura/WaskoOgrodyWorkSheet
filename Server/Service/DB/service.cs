namespace Wasko;

class ServiceDatabase : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    var connectionStr = builder.Configuration.GetSection("Database")["Connect"] ?? throw new NullReferenceException();
    var password = Environment.GetEnvironmentVariable("DB_PASSWORD");
    var host = Environment.GetEnvironmentVariable("db");
    connectionStr = connectionStr.Replace("${PASSWORD}", password);
    connectionStr = connectionStr.Replace("${SERVER}", host);

    builder.Services.AddDbContext<DbContext>(options => {
      options.UseSqlServer(connectionStr, sqlOptions => {
        sqlOptions.EnableRetryOnFailure();
        sqlOptions.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
      })
      .LogTo(Console.WriteLine, LogLevel.Information);
    });
  }
}