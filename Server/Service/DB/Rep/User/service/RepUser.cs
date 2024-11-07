
namespace Wasko;

public class RepUser(IHttpContextAccessor context, SignInManager<ModelUser> sim, IMemoryCache cache, DbContext db) : IRepUser {
  private readonly IHttpContextAccessor _context = context;
  private readonly SignInManager<ModelUser> _sim = sim;
  private readonly IMemoryCache _cache = cache;
  private readonly DbContext _db = db;

  public async Task<bool> Login(string login, string password)
  {
    await _sim.SignOutAsync();
    var user = await _sim.UserManager.FindByNameAsync(login);
    if (user is null) {
      return false;
    }
    return (await _sim.PasswordSignInAsync(user, password, false, false)).Succeeded;
  }

  public async Task Logout()
  {
    await _sim.SignOutAsync();
  }

  public string? GetCurrentID()
  {
    return _context.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);
  }

  public IEnumerable<ModelRole> GetCurrentRoles(out DateTime cacheTime)
  {
    var id = GetCurrentID() ?? throw new NullReferenceException();
    var (data, time) = _cache.GetOrCreate($"user_role:{id}", (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var roles = _db.Roles
        .Include(role => role.Users)
        .Where(role => role.Users!.Any(user => user.Id == id))
        .ToArray();

      cache.AddExpirationUserRoles(id);
      cache.AddExpirationRole(roles);
      return new Tuple<IEnumerable<ModelRole>, DateTime>(roles, time);
    })!;

    cacheTime = time;
    return data;
  }

  public ModelUserProfil GetCurrentProfil(out DateTime cacheTime)
  {
    var id = GetCurrentID() ?? throw new NullReferenceException();
    var (data, time) = _cache.GetOrCreate($"user_profil:{id}", (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      var user = _db.Users
        .Include(user => user.Profil)
        .Include(user => user.Roles)
        .First(user => user.Id == id);

      var profil = new ModelUserProfil {
        UserName = user.UserName!,
        FirstName = user.Profil!.FirstName,
        LastName = user.Profil.LastName,
        WorkStartDate = user.Profil.WorkStartDate,
        Roles = user.Roles!.Select(a => a.Name!),
      };

      cache.AddExpirationUserRoles(id);
      cache.AddExpirationUserProfil(id);
      cache.AddExpirationRole(user.Roles!);
      return new Tuple<ModelUserProfil, DateTime>(profil, time);
    })!;

    cacheTime = time;
    return data;
  }
}