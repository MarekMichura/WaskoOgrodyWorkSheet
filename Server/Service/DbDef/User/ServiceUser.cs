
namespace Wasko;

partial class ServiceUser(IHttpContextAccessor httpContext, SignInManager<ModelUser> sim, DatabaseContext db) : IServiceUser
{
  private readonly IHttpContextAccessor _httpContext = httpContext;
  private readonly SignInManager<ModelUser> _sim = sim;
  private readonly DatabaseContext _db = db;
}