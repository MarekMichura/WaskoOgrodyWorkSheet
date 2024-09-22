class StorageWorkLocationTargetRole
{
  static private string roleID(string name) =>
    StorageRole.Roles.First(a => a.Name == name).Id;

  static private string workLocID(string name) =>
    StorageWorkLocations.WorkLocations.First(a => a.Name == name).ID;

  static public IEnumerable<ModelWorkLocationTargetRole> WorkLocationRoles = _WorkLocationRoles().ToArray();
  static private IEnumerable<ModelWorkLocationTargetRole> _WorkLocationRoles()
  {

    yield return new() { RoleID = roleID("OfficeWorker"), WorkLocationID = workLocID("Office") };

    foreach (var loc in StorageWorkLocations.WorkLocations.Skip(2))
    {
      yield return new() { RoleID = roleID("Gardener"), WorkLocationID = loc.ID };
    }
  }
}