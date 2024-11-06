namespace Wasko;

public static partial class Extend {
  public static void DefineMiddleware(this WebApplication app)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IMiddleware).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IMiddleware>()
        .OrderByDescending(endPoint => endPoint.Priority)
        .ForEach(endPoint => {
          endPoint.DefineMiddleware(app);
        });
  }
}