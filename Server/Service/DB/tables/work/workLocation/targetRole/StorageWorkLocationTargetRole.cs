namespace Wasko;

class StorageWorkLocationTargetRole
{
  static private string roleID(string name) =>
    StorageRole.Roles.First(a => a.Name == name).Id;

  static private string workLocID(string name) =>
    StorageWorkLocations.WorkLocations.First(a => a.Name == name).ID;

  static public IEnumerable<ModelWorkLocationTargetRole> WorkLocationRoles = _WorkLocationRoles().ToArray();
  static private IEnumerable<ModelWorkLocationTargetRole> _WorkLocationRoles()
  {
    yield return new() { RoleID = StorageRole.employer, WorkLocationID = StorageWorkLocations.NotSet };
    yield return new() { RoleID = StorageRole.employer, WorkLocationID = StorageWorkLocations.Drive };
    yield return new() { RoleID = StorageRole.employer, WorkLocationID = StorageWorkLocations.Office };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.maja };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Pychowicka };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Wizjonerów };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Grzegórzecka };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Tarnów };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Tarnow };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Quattro };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Rondo };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Narama };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Kielce };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Piaskowa };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Poleska };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Mogilska };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.Henniger };
    yield return new() { RoleID = StorageRole.gardener, WorkLocationID = StorageWorkLocations.klimanowa };

  }
}