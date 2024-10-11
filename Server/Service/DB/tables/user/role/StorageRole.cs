namespace Wasko;

class StorageRole(string id, string name, ushort strength = 0)
{
  public string ID { get; set; } = id;
  public string Name { get; set; } = name;
  public ushort TitleStrength { get; set; } = strength;

  static public implicit operator ModelRole(StorageRole role) => new()
  {
    Id = role.ID,
    Name = role.Name,
    TitleStrength = role.TitleStrength,
    NormalizedName = role.Name.ToUpper(),
    ConcurrencyStamp = Guid.NewGuid().ToString(),
    AuthorID = StorageUser.Users.First(a => a.UserName == "admin").Id
  };

  static private readonly StorageRole RoleBlockEmployerDayOff = new("264462d7-74f0-45c3-bcf2-7ad0741e7676", nameof(BuildInRoles.Block_employer_day_off));
  static private readonly StorageRole RoleBlockEmployerBonus = new("8962bf18-a454-4c90-a7f8-0927ddb6d7e5", nameof(BuildInRoles.Block_employer_bonus));
  static private readonly StorageRole RoleBlockEmployerFound = new("144d7ab4-8c81-4c03-98a8-4f6beb754a65", nameof(BuildInRoles.Block_employer_found));

  static private readonly StorageRole RoleEmployer = new("38dcacea-ee73-4c98-bc7b-cfba196ccab5", nameof(BuildInRoles.Employer), 1);
  static private readonly StorageRole RoleGardener = new("05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", nameof(BuildInRoles.Gardener), 2);

  static private readonly StorageRole RolePolishHolidays = new("1d923116-d460-4809-b8d8-47d1c4216b2c", nameof(BuildInRoles.Polish_holidays));

  static public IEnumerable<ModelRole> Roles = [RoleBlockEmployerDayOff, RoleBlockEmployerBonus, RoleBlockEmployerFound, RoleEmployer, RoleGardener, RolePolishHolidays];

  static public string employerID = RoleEmployer.ID;
  static public string gardenerID = RoleGardener.ID;
  static public string blockEmployerDayOffID = RoleBlockEmployerDayOff.ID;
  static public string blockEmployerBonusID = RoleBlockEmployerBonus.ID;
  static public string blockEmployerFoundID = RoleBlockEmployerFound.ID;
  static public string polishHolidaysID = RolePolishHolidays.ID;
}
