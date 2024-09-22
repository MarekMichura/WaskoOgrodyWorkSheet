class StorageUsersRole
{
  static private string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  static private string roleID(string role) =>
    StorageRole.Roles.First(a => a.Name == role).Id;

  static public IEnumerable<IdentityUserRole<string>> UsersRoles = _UsersRoles().ToArray();
  static private IEnumerable<IdentityUserRole<string>> _UsersRoles()
  {
    yield return new() { UserId = userID("user0"), RoleId = roleID("Employee") };
    yield return new() { UserId = userID("user0"), RoleId = roleID("Gardener") };
    yield return new() { UserId = userID("admin"), RoleId = roleID("CreateNewEmployee") };
    yield return new() { UserId = userID("admin"), RoleId = roleID("FireEmployee") };
    yield return new() { UserId = userID("admin"), RoleId = roleID("RoleManager") };
  }
}