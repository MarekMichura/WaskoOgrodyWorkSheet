namespace Wasko;

public class RepUser(IHttpContextAccessor context, SignInManager<ModelUser> sim, IMemoryCache cache, IDbContextFactory<DbContext> factory) : IRepUser {
  private readonly IHttpContextAccessor _context = context;
  private readonly SignInManager<ModelUser> _sim = sim;
  private readonly IMemoryCache _cache = cache;
  private readonly IDbContextFactory<DbContext> _factory = factory;

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

  public async Task<CacheResult<ModelRole[]>> GetUserRolesAsync(string id)
  {
    return await _cache.GetOrCreate($"user_role:{id}", async (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;

      using var db = await _factory.CreateDbContextAsync();
      var roles = await db.Roles
        .Include(role => role.Users)
        .Where(role => role.Users!.Any(user => user.Id == id))
        .ToArrayAsync();

      cache.AddExpirationUserRoles(id);
      cache.AddExpirationRole(roles);
      return new CacheResult<ModelRole[]>(roles, time);
    })!;
  }

  public async Task<CacheResult<ModelUserProfil>> GetUserProfilAsync(string id)
  {
    return (await _cache.GetOrCreateAsync($"user_profil:{id}", async (ICacheEntry cache) => {
      cache.SetDefaultOptions();
      var time = DateTime.Now;
      using var db = await _factory.CreateDbContextAsync();
      var user = await db.Users
        .Include(user => user.Profil)
        .Include(user => user.Roles)
        .FirstAsync(user => user.Id == id);

      var profil = new ModelUserProfil {
        UserName = user.UserName!,
        FirstName = user.Profil!.FirstName,
        LastName = user.Profil.LastName,
        WorkStartDate = user.Profil.WorkStartDate,
        Roles = user.Roles!.Select(a => a.Name!).ToArray(),
      };

      cache.AddExpirationUserRoles(id);
      cache.AddExpirationUserProfil(id);
      cache.AddExpirationRole(user.Roles!);
      return new CacheResult<ModelUserProfil>(profil, time);
    }))!;
  }
}
