#if DEBUG
namespace Wasko;

public class StorageUsersRole {
  private static readonly IdentityUserRole<string> UserRoleUserEmployer = new() {
    UserId = StorageUser.User!,
    RoleId = StorageRole.employerID
  };

  private static readonly IdentityUserRole<string> UserRoleUserGardener = new() {
    UserId = StorageUser.User!,
    RoleId = StorageRole.gardenerID
  };

  private static readonly IdentityUserRole<string> UserRoleUserPolishHolidays = new() {
    UserId = StorageUser.User!,
    RoleId = StorageRole.polishHolidaysID
  };

  private static readonly IdentityUserRole<string> UserRoleDimaEmployer = new() {
    UserId = StorageUser.Dima!,
    RoleId = StorageRole.employerID
  };

  private static readonly IdentityUserRole<string> UserRoleDimaGardener = new() {
    UserId = StorageUser.Dima!,
    RoleId = StorageRole.gardenerID
  };

  private static readonly IdentityUserRole<string> UserRoleDimaPolishHolidays = new() {
    UserId = StorageUser.Dima!,
    RoleId = StorageRole.polishHolidaysID
  };

  private static readonly IdentityUserRole<string> UserRoleLoszkaEmployer = new() {
    UserId = StorageUser.Loszka!,
    RoleId = StorageRole.employerID
  };

  private static readonly IdentityUserRole<string> UserRoleLoszkaGardener = new() {
    UserId = StorageUser.Loszka!,
    RoleId = StorageRole.gardenerID
  };

  private static readonly IdentityUserRole<string> UserRoleLoszkaPolishHolidays = new() {
    UserId = StorageUser.Loszka!,
    RoleId = StorageRole.polishHolidaysID
  };

  private static readonly IdentityUserRole<string> UserRoleErykEmployer = new() {
    UserId = StorageUser.Eryk!,
    RoleId = StorageRole.employerID
  };

  private static readonly IdentityUserRole<string> UserRoleErykGardener = new() {
    UserId = StorageUser.Eryk!,
    RoleId = StorageRole.gardenerID
  };

  private static readonly IdentityUserRole<string> UserRoleErykPolishHolidays = new() {
    UserId = StorageUser.Eryk!,
    RoleId = StorageRole.polishHolidaysID
  };

  public readonly static IdentityUserRole<string>[] UsersRoles =
    [UserRoleUserEmployer, UserRoleUserGardener, UserRoleUserPolishHolidays, UserRoleDimaEmployer, UserRoleDimaGardener, UserRoleDimaPolishHolidays, UserRoleLoszkaEmployer, UserRoleLoszkaGardener, UserRoleLoszkaPolishHolidays, UserRoleErykEmployer, UserRoleErykGardener, UserRoleErykPolishHolidays];
}
#endif
