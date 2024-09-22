class StorageWorkLocationRole
{
  static public IEnumerable<ModelWorkLocationRoleWorkLocation> WorkLocationRolesWorkLocation =
    _WorkLocationRolesWorkLocation().ToArray();
  static public IEnumerable<ModelWorkLocationRole> WorkLocationRoles = _WorkLocationRoles();

  static private IEnumerable<ModelWorkLocationRole> _WorkLocationRoles()
  {
    yield return new()
    {
      ID = "1638d369-1b20-48fb-a8f7-586040ecbf51",
      AuthorID = StorageUser.Users.First(a => a.UserName == "admin").Id,
      Name = "Chord",
    };
  }

  static private IEnumerable<ModelWorkLocationRoleWorkLocation> _WorkLocationRolesWorkLocation()
  {
    foreach (var loc in StorageWorkLocations.WorkLocations.Skip(2))
    {
      yield return new()
      {
        LocationID = loc.ID,
        RoleID = _WorkLocationRoles().First().ID
      };
    }
  }
}