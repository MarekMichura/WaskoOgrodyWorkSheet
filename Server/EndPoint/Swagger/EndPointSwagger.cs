namespace Wasko;

public class EndPointSwagger : IEndPoint, IService
{
  public void DefineEndPoint(WebApplication app)
  {
    if (app.Environment.IsDevelopment())
    {
      app.UseSwagger();
      app.UseSwaggerUI();
    }
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    if (builder.Environment.IsDevelopment())
    {
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen(static a => { });
    }
  }
}