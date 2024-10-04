namespace Wasko;

class StorageUsersRole
{
  static public IEnumerable<IdentityUserRole<string>> UsersRoles = _UsersRoles().ToArray();
  static private IEnumerable<IdentityUserRole<string>> _UsersRoles()
  {
#if DEBUG
    yield return new() { UserId = StorageUser.user, RoleId = StorageRole.employerID };
    yield return new() { UserId = StorageUser.user, RoleId = StorageRole.gardenerID };
    yield return new() { UserId = StorageUser.user, RoleId = StorageRole.polishHolidaysID };


    yield return new() { UserId = StorageUser.Dima, RoleId = StorageRole.employerID };
    yield return new() { UserId = StorageUser.Dima, RoleId = StorageRole.gardenerID };
    yield return new() { UserId = StorageUser.Dima, RoleId = StorageRole.polishHolidaysID };

    yield return new() { UserId = StorageUser.Loszka, RoleId = StorageRole.employerID };
    yield return new() { UserId = StorageUser.Loszka, RoleId = StorageRole.gardenerID };
    yield return new() { UserId = StorageUser.Loszka, RoleId = StorageRole.polishHolidaysID };

    yield return new() { UserId = StorageUser.Eryk, RoleId = StorageRole.employerID };
    yield return new() { UserId = StorageUser.Eryk, RoleId = StorageRole.gardenerID };
    yield return new() { UserId = StorageUser.Eryk, RoleId = StorageRole.polishHolidaysID };
#endif
    yield break;
  }
}