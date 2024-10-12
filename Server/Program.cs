namespace Wasko;

class Program
{
    private static WebApplicationBuilder? _builder;
    private static WebApplication? _app;
    public static WebApplicationBuilder Builder => _builder ?? throw new NullReferenceException();
    public static WebApplication App => _app ?? throw new NullReferenceException();

    static void Main()
    {
        _builder = WebApplication.CreateBuilder();
        Builder.DefineServices();

        _app = Builder.Build();
        App.DefineEndPoints();

        App.Run();
    }
}