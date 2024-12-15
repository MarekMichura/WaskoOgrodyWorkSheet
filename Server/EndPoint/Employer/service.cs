namespace Wasko;

public class ServiceEmployer : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddValidatorsFromAssemblyContaining<ModelInputMapEmployerCalendarValidator>();
  }
}
