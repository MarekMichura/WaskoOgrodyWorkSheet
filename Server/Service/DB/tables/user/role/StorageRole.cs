namespace Wasko;

public class StorageRole(string id, string name, ushort strength = 0)
{
  public string ID { get; set; } = id;
  public string Name { get; set; } = name;
  public ushort TitleStrength { get; set; } = strength;

  public static implicit operator ModelRole(StorageRole role) => new()
  {
    Id = role.ID,
    Name = role.Name,
    TitleStrength = role.TitleStrength,
    NormalizedName = role.Name.ToUpper(),
    ConcurrencyStamp = Guid.NewGuid().ToString(),
    AuthorID = StorageUser.Users.First(static a => a.UserName == "admin").Id
  };

  private static readonly StorageRole RoleBlockEmployerDayOff = new("264462d7-74f0-45c3-bcf2-7ad0741e7676", nameof(BuildInRoles.Block_employer_day_off));
  private static readonly StorageRole RoleBlockEmployerBonus = new("8962bf18-a454-4c90-a7f8-0927ddb6d7e5", nameof(BuildInRoles.Block_employer_bonus));
  private static readonly StorageRole RoleBlockEmployerFound = new("144d7ab4-8c81-4c03-98a8-4f6beb754a65", nameof(BuildInRoles.Block_employer_found));

  private static readonly StorageRole RoleEmployer = new("38dcacea-ee73-4c98-bc7b-cfba196ccab5", nameof(BuildInRoles.Employer), 1);
  private static readonly StorageRole RoleGardener = new("05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", nameof(BuildInRoles.Gardener), 2);

  private static readonly StorageRole RolePolishHolidays = new("1d923116-d460-4809-b8d8-47d1c4216b2c", nameof(BuildInRoles.Polish_holidays));

  public static IEnumerable<ModelRole> Roles = [RoleBlockEmployerDayOff, RoleBlockEmployerBonus, RoleBlockEmployerFound, RoleEmployer, RoleGardener, RolePolishHolidays];

  public static string employerID = RoleEmployer.ID;
  public static string gardenerID = RoleGardener.ID;
  public static string blockEmployerDayOffID = RoleBlockEmployerDayOff.ID;
  public static string blockEmployerBonusID = RoleBlockEmployerBonus.ID;
  public static string blockEmployerFoundID = RoleBlockEmployerFound.ID;
  public static string polishHolidaysID = RolePolishHolidays.ID;
}
