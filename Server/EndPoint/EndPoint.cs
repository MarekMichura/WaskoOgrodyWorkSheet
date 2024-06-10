using System.Reflection;

public interface IEndPoint
{
  public short Priority { get; }

  public void DefineEndpoint(WebApplication app);
}

public interface IService
{
  public void DefineService(WebApplicationBuilder builder);
}

public static partial class EXTERN
{
  public static IEnumerable<T> ForEach<T>(this IEnumerable<T> enumerable, Action<T> fun)
  {
    foreach (var tmp in enumerable)
      fun(tmp);
    return enumerable;
  }

  public static void UseServices(this WebApplicationBuilder builder)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IService).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IService>()
        .ForEach(x => x.DefineService(builder));
  }

  public static void UseEndPoints(this WebApplication app)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IEndPoint).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IEndPoint>()
        .OrderByDescending(x => x.Priority)
        .ForEach(x => x.DefineEndpoint(app));
  }

  public static void UseMiddleware(this WebApplication app)
  {
    if (!app.Environment.IsDevelopment())
    {
      app.UseHsts();
    }
    app.MapControllers();

    app.UseHttpsRedirection();
    app.UseStaticFiles();

    app.UseRouting();
    app.UseSession();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoint => { });
  }
}