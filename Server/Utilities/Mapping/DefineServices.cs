namespace Wasko;

public static partial class Extend {
  public static void DefineServices(this WebApplicationBuilder builder)
  {
    var services = Assembly.GetExecutingAssembly().DefinedTypes
      .Where(type => typeof(IService).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IService>();

    foreach (var service in services) {
      service.DefineService(builder);
    }
  }
}