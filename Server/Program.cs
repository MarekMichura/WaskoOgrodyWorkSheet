using System.Runtime.CompilerServices;
using Wasko;


partial class Program
{
  private static WebApplicationBuilder? _builder;
  private static WebApplication? _app;
  public static WebApplicationBuilder builder => _builder ?? throw new NullReferenceException();
  public static WebApplication app => _app ?? throw new NullReferenceException();

  static void Main(string[] args)
  {
    _builder = WebApplication.CreateBuilder();
    builder.DefineServices();

    _app = builder.Build();
    app.DefineEndPoints();

    app.Run();
  }
}