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
    yield return new StorageRole("264462d7-74f0-45c3-bcf2-7ad0741e7676", nameof(BuildInRoles.Block_employer_day_off));
    yield return new StorageRole("8962bf18-a454-4c90-a7f8-0927ddb6d7e5", nameof(BuildInRoles.Block_employer_bonus));
    yield return new StorageRole("144d7ab4-8c81-4c03-98a8-4f6beb754a65", nameof(BuildInRoles.Block_employer_found));

    // titles
    yield return new StorageRole("38dcacea-ee73-4c98-bc7b-cfba196ccab5", nameof(BuildInRoles.Employer), 1);
    yield return new StorageRole("05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", nameof(BuildInRoles.Gardener), 2);

    // custom
    yield return new StorageRole("1d923116-d460-4809-b8d8-47d1c4216b2c", nameof(BuildInRoles.Polish_holidays));
  }

  static public string employerID = Roles.First(a => a.Name == nameof(BuildInRoles.Employer)).Id;
  static public string gardenerID = Roles.First(a => a.Name == nameof(BuildInRoles.Gardener)).Id;

  static public string blockEmployerDayOffID = Roles.First(a => a.Name == nameof(BuildInRoles.Block_employer_day_off)).Id;
  static public string blockEmployerBonusID = Roles.First(a => a.Name == nameof(BuildInRoles.Block_employer_bonus)).Id;
  static public string blockEmployerFoundID = Roles.First(a => a.Name == nameof(BuildInRoles.Block_employer_found)).Id;

  static public string polishHolidaysID = Roles.First(a => a.Name == nameof(BuildInRoles.Polish_holidays)).Id;
}

enum BuildInRoles
{
  Block_employer_day_off,
  Block_employer_bonus,
  Block_employer_found,
  Employer,
  Gardener,
  Polish_holidays
}