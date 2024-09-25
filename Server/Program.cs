using Wasko;

await Task.Delay(2000);

var builder = WebApplication.CreateBuilder(args);
builder.DefineServices();

var app = builder.Build();
app.DefineEndPoints();
app.Run();
