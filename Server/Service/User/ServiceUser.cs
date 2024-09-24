
namespace Wasko;

partial class ServiceUser : IServiceUser
{
  private readonly IHttpContextAccessor _httpContext;
  private readonly SignInManager<ModelUser> _sim;
  private readonly DatabaseContext _db;

  public ServiceUser(IHttpContextAccessor httpContext, SignInManager<ModelUser> sim, DatabaseContext db)
  {
    _httpContext = httpContext;
    _db = db;
    _sim = sim;
  }
}