await Task.Delay(1000);

var builder = WebApplication.CreateBuilder(args);
builder.DefineServices();

var app = builder.Build();
app.DefineEndPoints();
app.Run();