class StorageUser
{
  public string ID { get; set; }
  public string Email { get; set; }
  public string UserName { get; set; }
  public string Password { get; set; }

  public StorageUser(string id, string login, string password, string email)
  {
    ID = id;
    UserName = login;
    Password = password;
    Email = email;
  }

  static public implicit operator ModelUser(StorageUser user)
  {
    var result = new ModelUser()
    {
      Id = user.ID,
      UserName = user.UserName,
      NormalizedUserName = user.UserName.ToUpper(),
      Email = user.Email,
      NormalizedEmail = user.Email.ToUpper(),
      ConcurrencyStamp = Guid.NewGuid().ToString()
    };
    result.PasswordHash = new PasswordHasher<ModelUser>().HashPassword(result, user.Password);
    return result;
  }

  static public IEnumerable<ModelUser> Users = _Users().ToArray();
  static private IEnumerable<ModelUser> _Users()
  {
    yield return new StorageUser("cc9db47e-bda0-432c-a60e-e7b53183c609", "user0", "zaq1@WSX", "user@gmail.com");
    yield return new StorageUser("5e3a352b-7057-47ff-ab70-67f02da02973", "user1", "zaq1@WSX", "user@gmail.com");
    yield return new StorageUser("3548790a-52bf-4ee3-aedc-1d86626f9cc5", "user2", "zaq1@WSX", "user@gmail.com");
    yield return new StorageUser("f14429ac-76a9-43ec-adba-760f2cef19d2", "user3", "zaq1@WSX", "user@gmail.com");
    yield return new StorageUser("cb24a0c2-506f-4810-880b-7f6caa1c21b8", "admin", "zaq1@WSX", "admin@gmail.com");
  }
}