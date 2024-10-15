namespace Test;

public class WebApp : IDisposable
{
  public WebApplicationFactory<Program> App { get; init; }

  public WebApp()
  {
    App = new WebApplicationFactory<Program>().WithWebHostBuilder(static builder =>
    {
      builder.ConfigureServices(static services =>
        {
          // remove connection to DB and use in memory DB
          var db = services.SingleOrDefault(static a => a.ServiceType == typeof(DbContextOptions<DatabaseContext>))
            ?? throw new NullReferenceException();
          services.Remove(db);
          services.AddDbContext<DatabaseContext>(static a => a.UseInMemoryDatabase("Test"));

          // use default data in db
          var provider = services.BuildServiceProvider();
          using var scope = provider.CreateScope();

          var dataBase = scope.ServiceProvider.GetRequiredService<DatabaseContext>();
          dataBase.Database.EnsureCreated();
        });
    });
  }

  public void Dispose()
  {
    GC.SuppressFinalize(this);
    App.Dispose();
  }
}

[CollectionDefinition("WebApp")]
public class WebAppCollection : ICollectionFixture<WebApp>
{ }