namespace Wasko;

class StorageRole
{
  public string ID { get; set; }
  public string Name { get; set; }
  public ushort TitleStrength { get; set; } = 0;

  public StorageRole(string id, string name, ushort strength = 0)
  {
    ID = id;
    Name = name;
    TitleStrength = strength;
  }

  static public implicit operator ModelRole(StorageRole role) => new()
  {
    Id = role.ID,
    Name = role.Name,
    TitleStrength = role.TitleStrength,
    NormalizedName = role.Name.ToUpper(),
    ConcurrencyStamp = Guid.NewGuid().ToString(),
    AuthorID = StorageUser.Users.First(a => a.UserName == "admin").Id
  };

  static public IEnumerable<ModelRole> Roles = _Roles().ToArray();
  static private IEnumerable<ModelRole> _Roles()
  {
    // blocking
    yield return new StorageRole("264462d7-74f0-45c3-bcf2-7ad0741e7676", "Block employer day off");
    yield return new StorageRole("8962bf18-a454-4c90-a7f8-0927ddb6d7e5", "Block employer bonus");
    yield return new StorageRole("144d7ab4-8c81-4c03-98a8-4f6beb754a65", "Block employer found");

    // titles
    yield return new StorageRole("38dcacea-ee73-4c98-bc7b-cfba196ccab5", "Employer", 1);
    yield return new StorageRole("05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "Gardener", 2);

    // custom
    yield return new StorageRole("1d923116-d460-4809-b8d8-47d1c4216b2c", "Polish holidays");
  }

  static public string employer = Roles.First(a => a.Name == "Employer").Id;
  static public string gardener = Roles.First(a => a.Name == "Gardener").Id;

  static public string blockEmployerDayOff = Roles.First(a => a.Name == "Block employer day off").Id;
  static public string blockEmployerBonus = Roles.First(a => a.Name == "Block employer bonus").Id;
  static public string blockEmployerFound = Roles.First(a => a.Name == "Block employer found").Id;

  static public string polishHolidays = Roles.First(a => a.Name == "Polish holidays").Id;
}