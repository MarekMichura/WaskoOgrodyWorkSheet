namespace Wasko;

public class ServiceSPA : IService {
  public void DefineService(WebApplicationBuilder builder)
  {

    string Address = Environment.GetEnvironmentVariable("client")?.ToString() ?? throw new NullReferenceException();
    Console.WriteLine(Address);
    builder.Logging.AddFilter("Yarp.ReverseProxy.Forwarder.HttpForwarder", LogLevel.Warning);
    builder.Services.AddReverseProxy().LoadFromMemory(
      new[]{ new RouteConfig {
        RouteId = "route",
        ClusterId = "cluster",
        Match = new() { Path = "{**catch-all}" }
      }},
      new[]{ new ClusterConfig {
        ClusterId = "cluster",
        Destinations = new Dictionary<string, DestinationConfig> {
          ["nextjs"] = new() { Address = Address }
        }
      }}
    );
  }
}
