namespace Wasko;

public static partial class Extend {
  public static void DefineMiddleware(this WebApplication app)
  {
    var middlewares = Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IMiddleware).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IMiddleware>()
        .OrderByDescending(endPoint => endPoint.Priority);

    foreach (var middleware in middlewares) {
      middleware.DefineMiddleware(app);
    }
  }
}