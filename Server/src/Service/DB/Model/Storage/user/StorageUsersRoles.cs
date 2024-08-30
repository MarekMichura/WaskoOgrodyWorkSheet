class StorageUsersRoles
{
  private static string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  private static string roleID(string role) =>
    StorageRole.Roles.First(a => a.Name == role).Id;

  public static IReadOnlyList<IdentityUserRole<string>> UsersRoles = [
    new (){ UserId = userID("Maciek"), RoleId = roleID("EmployeeManager")},
    new (){ UserId = userID("Maciek"), RoleId = roleID("Employee")},
    new (){ UserId = userID("Maciek"), RoleId = roleID("ConstructionManager")},
    new (){ UserId = userID("Maciek"), RoleId = roleID("DayOffManager")},
    new (){ UserId = userID("Marek"), RoleId = roleID("ConstructionManager")},
  ];
}