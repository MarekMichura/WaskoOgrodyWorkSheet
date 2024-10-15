namespace Wasko;

public class StorageWorkLocationRole
{
  public static readonly ModelWorkLocationRole RoleChord = new()
  {
    ID = "1638d369-1b20-48fb-a8f7-586040ecbf51",
    AuthorID = StorageUser.Users.First(static a => a.UserName == "admin").Id,
    Name = "Chord"
  };

  public static readonly string chord = RoleChord.ID;

  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation1 = new() { RoleID = chord, LocationID = StorageWorkLocations.maja };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation2 = new() { RoleID = chord, LocationID = StorageWorkLocations.Pychowicka };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation3 = new() { RoleID = chord, LocationID = StorageWorkLocations.Wizjonerów };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation4 = new() { RoleID = chord, LocationID = StorageWorkLocations.Grzegórzecka };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation5 = new() { RoleID = chord, LocationID = StorageWorkLocations.Tarnów };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation6 = new() { RoleID = chord, LocationID = StorageWorkLocations.Tarnow };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation7 = new() { RoleID = chord, LocationID = StorageWorkLocations.Quattro };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation8 = new() { RoleID = chord, LocationID = StorageWorkLocations.Rondo };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation9 = new() { RoleID = chord, LocationID = StorageWorkLocations.Narama };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation10 = new() { RoleID = chord, LocationID = StorageWorkLocations.Kielce };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation11 = new() { RoleID = chord, LocationID = StorageWorkLocations.Piaskowa };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation12 = new() { RoleID = chord, LocationID = StorageWorkLocations.Poleska };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation13 = new() { RoleID = chord, LocationID = StorageWorkLocations.Mogilska };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation14 = new() { RoleID = chord, LocationID = StorageWorkLocations.Henniger };
  public static readonly ModelWorkLocationRoleWorkLocation RoleWorkLocation15 = new() { RoleID = chord, LocationID = StorageWorkLocations.klimanowa };

  public static readonly IEnumerable<ModelWorkLocationRole> WorkLocationRoles =
    [RoleChord];

  public static readonly IEnumerable<ModelWorkLocationRoleWorkLocation> WorkLocationRolesWorkLocation =
    [RoleWorkLocation1, RoleWorkLocation2, RoleWorkLocation3, RoleWorkLocation4, RoleWorkLocation5, RoleWorkLocation6, RoleWorkLocation7, RoleWorkLocation8, RoleWorkLocation9, RoleWorkLocation10, RoleWorkLocation11, RoleWorkLocation12, RoleWorkLocation13, RoleWorkLocation14, RoleWorkLocation15];
}
