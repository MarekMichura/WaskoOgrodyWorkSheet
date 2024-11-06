namespace Wasko;

public static partial class Extend {
  public static void DefineServices(this WebApplicationBuilder builder)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(type => typeof(IService).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IService>()
        .ForEach(service => service.DefineService(builder));
  }
}