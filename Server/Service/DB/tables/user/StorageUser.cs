namespace Wasko;

class StorageUser
{
  public string ID { get; set; }
  public string Email { get; set; }
  public string UserName { get; set; }
  public string Password { get; set; }
  public bool Active { get; set; }

  public StorageUser(string id, string login, string password, string email, bool active = true)
  {
    ID = id;
    UserName = login;
    Password = password;
    Email = email;
    Active = active;
  }

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

  static public IEnumerable<ModelUser> Users = _Users().ToArray();
  static private IEnumerable<ModelUser> _Users()
  {
    yield return new StorageUser("cb24a0c2-506f-4810-880b-7f6caa1c21b8", "admin", "zaq1@WSX", "admin@gmail.com", false);

    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new StorageUser("68553cdf-0a20-4969-9693-c49315c7df58", "Eryk", "zaq1@WSX", "eryk@gmail.com");
    yield return new StorageUser("8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "Loszka", "zaq1@WSX", "loszka@gmail.com");
    yield return new StorageUser("ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "Dima", "zaq1@WSX", "dima@gmail.com");
  }

  static public string getID(string userName) =>
    Users.First(a => a.UserName == userName).Id;
}