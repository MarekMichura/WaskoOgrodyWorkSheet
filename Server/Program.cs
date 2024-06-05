var builder = WebApplication.CreateBuilder(args);
builder.UseServices();

var app = builder.Build();
app.UseMiddleware();
app.UseEndPoints();

app.Run();
