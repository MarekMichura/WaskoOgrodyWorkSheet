#if DEBUG
namespace Wasko;

class StorageUsersRole
{
  static private readonly IdentityUserRole<string> UserRoleUserEmployer = new()
  {
    UserId = StorageUser.user!,
    RoleId = StorageRole.employerID
  };

  static private readonly IdentityUserRole<string> UserRoleUserGardener = new()
  {
    UserId = StorageUser.user!,
    RoleId = StorageRole.gardenerID
  };

  static private readonly IdentityUserRole<string> UserRoleUserPolishHolidays = new()
  {
    UserId = StorageUser.user!,
    RoleId = StorageRole.polishHolidaysID
  };

  static private readonly IdentityUserRole<string> UserRoleDimaEmployer = new()
  {
    UserId = StorageUser.Dima!,
    RoleId = StorageRole.employerID
  };

  static private readonly IdentityUserRole<string> UserRoleDimaGardener = new()
  {
    UserId = StorageUser.Dima!,
    RoleId = StorageRole.gardenerID
  };

  static private readonly IdentityUserRole<string> UserRoleDimaPolishHolidays = new()
  {
    UserId = StorageUser.Dima!,
    RoleId = StorageRole.polishHolidaysID
  };

  static private readonly IdentityUserRole<string> UserRoleLoszkaEmployer = new()
  {
    UserId = StorageUser.Loszka!,
    RoleId = StorageRole.employerID
  };

  static private readonly IdentityUserRole<string> UserRoleLoszkaGardener = new()
  {
    UserId = StorageUser.Loszka!,
    RoleId = StorageRole.gardenerID
  };

  static private readonly IdentityUserRole<string> UserRoleLoszkaPolishHolidays = new()
  {
    UserId = StorageUser.Loszka!,
    RoleId = StorageRole.polishHolidaysID
  };

  static private readonly IdentityUserRole<string> UserRoleErykEmployer = new()
  {
    UserId = StorageUser.Eryk!,
    RoleId = StorageRole.employerID
  };

  static private readonly IdentityUserRole<string> UserRoleErykGardener = new()
  {
    UserId = StorageUser.Eryk!,
    RoleId = StorageRole.gardenerID
  };

  static private readonly IdentityUserRole<string> UserRoleErykPolishHolidays = new()
  {
    UserId = StorageUser.Eryk!,
    RoleId = StorageRole.polishHolidaysID
  };

  static public IEnumerable<IdentityUserRole<string>> UsersRoles =
    [UserRoleUserEmployer, UserRoleUserGardener, UserRoleUserPolishHolidays, UserRoleDimaEmployer, UserRoleDimaGardener, UserRoleDimaPolishHolidays, UserRoleLoszkaEmployer, UserRoleLoszkaGardener, UserRoleLoszkaPolishHolidays, UserRoleErykEmployer, UserRoleErykGardener, UserRoleErykPolishHolidays];
}
#endif
