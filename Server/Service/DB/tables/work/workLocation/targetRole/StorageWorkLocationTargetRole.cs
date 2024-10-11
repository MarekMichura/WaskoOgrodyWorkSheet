namespace Wasko;

class StorageWorkLocationTargetRole
{
  static public readonly ModelWorkLocationTargetRole Role1 = new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.NotSet };
  static public readonly ModelWorkLocationTargetRole Role2 = new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.Drive };
  static public readonly ModelWorkLocationTargetRole Role3 = new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.Office };
  static public readonly ModelWorkLocationTargetRole Role4 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.maja };
  static public readonly ModelWorkLocationTargetRole Role5 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Pychowicka };
  static public readonly ModelWorkLocationTargetRole Role6 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Wizjonerów };
  static public readonly ModelWorkLocationTargetRole Role7 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Grzegórzecka };
  static public readonly ModelWorkLocationTargetRole Role8 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Tarnów };
  static public readonly ModelWorkLocationTargetRole Role9 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Tarnow };
  static public readonly ModelWorkLocationTargetRole Role10 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Quattro };
  static public readonly ModelWorkLocationTargetRole Role11 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Rondo };
  static public readonly ModelWorkLocationTargetRole Role12 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Narama };
  static public readonly ModelWorkLocationTargetRole Role13 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Kielce };
  static public readonly ModelWorkLocationTargetRole Role14 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Piaskowa };
  static public readonly ModelWorkLocationTargetRole Role15 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Poleska };
  static public readonly ModelWorkLocationTargetRole Role16 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Mogilska };
  static public readonly ModelWorkLocationTargetRole Role17 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Henniger };
  static public readonly ModelWorkLocationTargetRole Role18 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.klimanowa };

  static public readonly IEnumerable<ModelWorkLocationTargetRole> WorkLocationRoles =
    [Role1, Role2, Role3, Role4, Role5, Role6, Role7, Role8, Role9, Role10, Role11, Role12, Role13, Role14, Role15, Role16, Role17, Role18];
}
