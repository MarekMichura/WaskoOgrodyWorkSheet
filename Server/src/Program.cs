// var t = Task.Run(async delegate { await Task.Delay(2000); return 42; });
// t.Wait();

var builder = WebApplication.CreateBuilder(args);
builder.DefineServices();

var app = builder.Build();
app.DefineEndPoints();
app.Run();