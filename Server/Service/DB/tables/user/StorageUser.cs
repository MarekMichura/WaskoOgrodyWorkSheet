namespace Wasko;

class StorageUser(string id, string login, string password, string email, bool active = true)
{
  public string ID { get; set; } = id;
  public string Email { get; set; } = email;
  public string UserName { get; set; } = login;
  public string Password { get; set; } = password;
  public bool Active { get; set; } = active;

  static public implicit operator ModelUser(StorageUser user)
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

  static private readonly StorageUser AdminUser = new("cb24a0c2-506f-4810-880b-7f6caa1c21b8", "admin", "zaq1@WSX", "marekti012@gmail.com", false);

#if DEBUG
  static private readonly StorageUser UserUser = new("26453523-4cb2-448a-90d4-663072a57ecc", "user", "zaq1@WSX", "user@gmail.com", false);
  static private readonly StorageUser ErykUser = new("68553cdf-0a20-4969-9693-c49315c7df58", "Eryk", "zaq1@WSX", "eryk@gmail.com");
  static private readonly StorageUser LoszkaUser = new("8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "Loszka", "zaq1@WSX", "loszka@gmail.com");
  static private readonly StorageUser DimaUser = new("ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "Dima", "zaq1@WSX", "dima@gmail.com");
#endif

#if DEBUG
  static public IEnumerable<ModelUser> Users = [AdminUser, UserUser, ErykUser, LoszkaUser, DimaUser];
#else
  static public IEnumerable<ModelUser> Users = [AdminUser];
#endif

  static public string admin = AdminUser.ID;
#if DEBUG
  static public string user = UserUser.ID;
  static public string Eryk = ErykUser.ID;
  static public string Loszka = LoszkaUser.ID;
  static public string Dima = DimaUser.ID;
#endif
}
