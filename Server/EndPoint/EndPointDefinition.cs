public interface IService
{
  public void DefineService(WebApplicationBuilder builder);
}

public interface IEndPoint
{
  public short Priority => 0;
  public void DefineEndPoint(WebApplication app);
}

public static class EndPointDefinition
{
  public static IEnumerable<T> ForEach<T>(this IEnumerable<T> objs, Action<T> fun)
  {
    foreach (var obj in objs)
      fun(obj);
    return objs;
  }

  public static void DefineServices(this WebApplicationBuilder builder)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IService).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IService>()
        .ForEach(x => x.DefineService(builder));
  }

  public static void DefineEndPoints(this WebApplication app)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IEndPoint).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IEndPoint>()
        .OrderByDescending(x => x.Priority)
        .ForEach(x => x.DefineEndPoint(app));
  }
}