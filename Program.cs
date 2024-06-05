var builder = WebApplication.CreateBuilder(args);
builder.UseServices();

var app = builder.Build();
app.UseEndPoints();
app.UseMiddleware();

app.Run();
