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
    yield return new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.NotSet };
    yield return new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.Drive };
    yield return new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.Office };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.maja };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Pychowicka };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Wizjonerów };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Grzegórzecka };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Tarnów };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Tarnow };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Quattro };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Rondo };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Narama };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Kielce };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Piaskowa };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Poleska };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Mogilska };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Henniger };
    yield return new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.klimanowa };

  }
}