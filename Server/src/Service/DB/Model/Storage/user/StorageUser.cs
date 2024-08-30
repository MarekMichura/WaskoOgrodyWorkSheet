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

  public static implicit operator ModelUser(StorageUser user)
  {
    var result = new ModelUser()
    {
      Id = user.ID,
      UserName = user.UserName,
      NormalizedUserName = user.UserName.ToUpper(),
      Email = user.Email,
      NormalizedEmail = user.Email.ToUpper(),
    };
    result.PasswordHash = new PasswordHasher<ModelUser>().HashPassword(result, user.Password);
    return result;
  }

  public static IReadOnlyList<ModelUser> Users = [
    new StorageUser("cc9db47e-bda0-432c-a60e-e7b53183c609", "Maciek", "6NgWFjxS", "ogrodywasko@gmail.com"),
    new StorageUser("cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Marek", "zaq1@WSX", "marekti012@gmail.com"),
  ];
}