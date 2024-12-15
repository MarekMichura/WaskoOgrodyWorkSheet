namespace Wasko;

public class ServiceSwagger : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
  }
}
