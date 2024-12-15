namespace Wasko;

internal class ServiceDatabase : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    var connectionStr = builder.Configuration.GetSection("Database")["Connect"] ?? throw new NullReferenceException();
    var password = Environment.GetEnvironmentVariable("DB_PASSWORD");
    var host = Environment.GetEnvironmentVariable("db");
    connectionStr = connectionStr.Replace("${PASSWORD}", password);
    connectionStr = connectionStr.Replace("${SERVER}", host);

    System.Console.WriteLine(value: connectionStr);
    builder.Services.AddDbContextFactory<DataBaseContext>(options => {
      options.LogTo((_) => { }, LogLevel.None);
      options.UseSqlServer(connectionStr, sqlOptions => {
        sqlOptions.EnableRetryOnFailure();
      });
    });
  }
}
