namespace Wasko;

class StorageUser(string id, string login, string password, string email, bool active = true)
{
  public string ID { get; set; } = id;
  public string Email { get; set; } = email;
  public string UserName { get; set; } = login;
  public string Password { get; set; } = password;
  public bool Active { get; set; } = active;

  public static implicit operator ModelUser(StorageUser user)
  {
    var result = new ModelUser()
    {
      Id = user.ID,
      UserName = user.UserName,
      NormalizedUserName = user.UserName.ToUpper(),
      Email = user.Email,
      Active = user.Active,
      NormalizedEmail = user.Email.ToUpper(),
      ConcurrencyStamp = Guid.NewGuid().ToString()
    };
    result.PasswordHash = new PasswordHasher<ModelUser>().HashPassword(result, user.Password);
    return result;
  }

  private static readonly StorageUser AdminUser = new("cb24a0c2-506f-4810-880b-7f6caa1c21b8", "admin", "zaq1@WSX", "marekti012@gmail.com", false);

#if DEBUG
  private static readonly StorageUser UserUser = new("26453523-4cb2-448a-90d4-663072a57ecc", "user", "zaq1@WSX", "user@gmail.com", false);
  private static readonly StorageUser ErykUser = new("68553cdf-0a20-4969-9693-c49315c7df58", "Eryk", "zaq1@WSX", "eryk@gmail.com");
  private static readonly StorageUser LoszkaUser = new("8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "Loszka", "zaq1@WSX", "loszka@gmail.com");
  private static readonly StorageUser DimaUser = new("ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "Dima", "zaq1@WSX", "dima@gmail.com");
#endif

#if DEBUG
  public static IEnumerable<ModelUser> Users = [AdminUser, UserUser, ErykUser, LoszkaUser, DimaUser];
#else
  static public IEnumerable<ModelUser> Users = [AdminUser];
#endif

  public static string admin = AdminUser.ID;
#if DEBUG
  public static string user = UserUser.ID;
  public static string Eryk = ErykUser.ID;
  public static string Loszka = LoszkaUser.ID;
  public static string Dima = DimaUser.ID;
#endif
}
