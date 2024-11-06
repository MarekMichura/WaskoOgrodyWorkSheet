namespace Wasko;

internal class ServiceConversion : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddControllers()
      .AddJsonOptions(static options => {
        options.JsonSerializerOptions.Converters.Add(new JsonConvertDateOnly());
        options.JsonSerializerOptions.Converters.Add(new JsonConvertTimeOnly());
      });
  }
}