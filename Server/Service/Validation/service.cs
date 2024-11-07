namespace Wasko;

internal class ServiceValidation : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddFluentValidationAutoValidation();
  }
}