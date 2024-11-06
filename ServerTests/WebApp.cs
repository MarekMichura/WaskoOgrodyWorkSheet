namespace Test;

public class WebApp : IDisposable {
  public WebApplicationFactory<Program> App { get; init; }

  public WebApp()
  {
    App = new WebApplicationFactory<Program>().WithWebHostBuilder(static builder => {
      builder.ConfigureServices(static services => {
        var db = services
          .SingleOrDefault(static service => service.ServiceType == typeof(DbContextOptions<Wasko.DbContext>))
          ?? throw new NullReferenceException();

        services.Remove(db);
        services.AddDbContext<Wasko.DbContext>(static options => options.UseInMemoryDatabase("Test"));

        var provider = services.BuildServiceProvider();
        using var scope = provider.CreateScope();

        var dataBase = scope.ServiceProvider
          .GetRequiredService<Wasko.DbContext>();
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
public class WebAppCollection : ICollectionFixture<WebApp> { }