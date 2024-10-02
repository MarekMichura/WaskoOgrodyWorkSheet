namespace Wasko;

class StorageUsersRole
{
  static public IEnumerable<IdentityUserRole<string>> UsersRoles = _UsersRoles().ToArray();
  static private IEnumerable<IdentityUserRole<string>> _UsersRoles()
  {
#if DEBUG
    yield return new() { UserId = StorageUser.user, RoleId = StorageRole.employer };
    yield return new() { UserId = StorageUser.user, RoleId = StorageRole.gardener };
    yield return new() { UserId = StorageUser.user, RoleId = StorageRole.polishHolidays };


    yield return new() { UserId = StorageUser.Dima, RoleId = StorageRole.employer };
    yield return new() { UserId = StorageUser.Dima, RoleId = StorageRole.gardener };
    yield return new() { UserId = StorageUser.Dima, RoleId = StorageRole.polishHolidays };

    yield return new() { UserId = StorageUser.Loszka, RoleId = StorageRole.employer };
    yield return new() { UserId = StorageUser.Loszka, RoleId = StorageRole.gardener };
    yield return new() { UserId = StorageUser.Loszka, RoleId = StorageRole.polishHolidays };

    yield return new() { UserId = StorageUser.Eryk, RoleId = StorageRole.employer };
    yield return new() { UserId = StorageUser.Eryk, RoleId = StorageRole.gardener };
    yield return new() { UserId = StorageUser.Eryk, RoleId = StorageRole.polishHolidays };
#endif
    yield break;
  }
}