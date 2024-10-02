namespace Wasko;

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
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.maja };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Pychowicka };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Wizjonerów };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Grzegórzecka };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Tarnów };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Tarnow };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Quattro };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Rondo };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Narama };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Kielce };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Piaskowa };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Poleska };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Mogilska };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.Henniger };
    yield return new() { RoleID = chord, LocationID = StorageWorkLocations.klimanowa };
  }

  static public string chord = WorkLocationRoles.First(a => a.Name == "Chord").ID;
}