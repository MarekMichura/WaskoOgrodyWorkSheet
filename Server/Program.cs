
using Wasko;
Env.Load();

var builder = WebApplication.CreateBuilder(args);
builder.DefineServices();

var app = builder.Build();
app.DefineMiddleware();

app.Run();

public partial class Program { }