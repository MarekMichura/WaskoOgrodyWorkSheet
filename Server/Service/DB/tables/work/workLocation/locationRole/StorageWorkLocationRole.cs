namespace Wasko;

class StorageWorkLocationRole
{
  static public readonly ModelWorkLocationRole RoleChord = new()
  {
    ID = "1638d369-1b20-48fb-a8f7-586040ecbf51",
    AuthorID = StorageUser.Users.First(a => a.UserName == "admin").Id,
    Name = "Chord"
  };

  static public readonly string chord = RoleChord.ID;

  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation1 = new() { RoleID = chord, LocationID = StorageWorkLocations.maja };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation2 = new() { RoleID = chord, LocationID = StorageWorkLocations.Pychowicka };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation3 = new() { RoleID = chord, LocationID = StorageWorkLocations.Wizjonerów };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation4 = new() { RoleID = chord, LocationID = StorageWorkLocations.Grzegórzecka };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation5 = new() { RoleID = chord, LocationID = StorageWorkLocations.Tarnów };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation6 = new() { RoleID = chord, LocationID = StorageWorkLocations.Tarnow };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation7 = new() { RoleID = chord, LocationID = StorageWorkLocations.Quattro };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation8 = new() { RoleID = chord, LocationID = StorageWorkLocations.Rondo };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation9 = new() { RoleID = chord, LocationID = StorageWorkLocations.Narama };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation10 = new() { RoleID = chord, LocationID = StorageWorkLocations.Kielce };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation11 = new() { RoleID = chord, LocationID = StorageWorkLocations.Piaskowa };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation12 = new() { RoleID = chord, LocationID = StorageWorkLocations.Poleska };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation13 = new() { RoleID = chord, LocationID = StorageWorkLocations.Mogilska };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation14 = new() { RoleID = chord, LocationID = StorageWorkLocations.Henniger };
  static public readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation15 = new() { RoleID = chord, LocationID = StorageWorkLocations.klimanowa };

  static public readonly IEnumerable<ModelWorkLocationRole> WorkLocationRoles =
    [RoleChord];

  static public readonly IEnumerable<ModelWorkLocationRoleWorkLocation> WorkLocationRolesWorkLocation =
    [RoleWorkLocation1, RoleWorkLocation2, RoleWorkLocation3, RoleWorkLocation4, RoleWorkLocation5, RoleWorkLocation6, RoleWorkLocation7, RoleWorkLocation8, RoleWorkLocation9, RoleWorkLocation10, RoleWorkLocation11, RoleWorkLocation12, RoleWorkLocation13, RoleWorkLocation14, RoleWorkLocation15];
}
