namespace Wasko;

interface IService
{
  public void DefineService(WebApplicationBuilder builder);
}

interface IMiddleware
{
  public short Priority => 0;
  public void DefineEndPoint(WebApplication app);
}

static class MiddlewareDefinition
{
  public static IEnumerable<T> ForEach<T>(this IEnumerable<T> objs, Action<T> fun)
  {
    foreach (var obj in objs)
    {
      fun(obj);
    }

    return objs;
  }

  public static void DefineServices(this WebApplicationBuilder builder)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(type => typeof(IService).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IService>()
        .ForEach(service => service.DefineService(builder));
  }

  public static void DefineMiddleware(this WebApplication app)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IMiddleware).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IMiddleware>()
        .OrderByDescending(endPoint => endPoint.Priority)
        .ForEach(endPoint => endPoint.DefineEndPoint(app));
  }
}