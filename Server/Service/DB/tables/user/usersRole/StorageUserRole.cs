namespace Wasko;

class StorageUsersRole
{
  static public IEnumerable<IdentityUserRole<string>> UsersRoles = _UsersRoles().ToArray();
  static private IEnumerable<IdentityUserRole<string>> _UsersRoles()
  {
    yield return new() { UserId = StorageUser.getID("admin"), RoleId = StorageRole.getID("Zarządca pracowników") };

    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new() { UserId = StorageUser.getID("Dima"), RoleId = StorageRole.getID("Pracownik") };
    yield return new() { UserId = StorageUser.getID("Dima"), RoleId = StorageRole.getID("Ogrodnik") };
    yield return new() { UserId = StorageUser.getID("Dima"), RoleId = StorageRole.getID("Polskie święta") };

    yield return new() { UserId = StorageUser.getID("Loszka"), RoleId = StorageRole.getID("Pracownik") };
    yield return new() { UserId = StorageUser.getID("Loszka"), RoleId = StorageRole.getID("Ogrodnik") };
    yield return new() { UserId = StorageUser.getID("Loszka"), RoleId = StorageRole.getID("Polskie święta") };

    yield return new() { UserId = StorageUser.getID("Eryk"), RoleId = StorageRole.getID("Pracownik") };
    yield return new() { UserId = StorageUser.getID("Eryk"), RoleId = StorageRole.getID("Ogrodnik") };
    yield return new() { UserId = StorageUser.getID("Eryk"), RoleId = StorageRole.getID("Polskie święta") };
  }
}