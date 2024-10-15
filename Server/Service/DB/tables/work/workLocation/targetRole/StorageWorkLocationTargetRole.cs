namespace Wasko;

public class StorageWorkLocationTargetRole
{
  public static readonly ModelWorkLocationTargetRole Role1 = new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.NotSet };
  public static readonly ModelWorkLocationTargetRole Role2 = new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.Drive };
  public static readonly ModelWorkLocationTargetRole Role3 = new() { RoleID = StorageRole.employerID, WorkLocationID = StorageWorkLocations.Office };
  public static readonly ModelWorkLocationTargetRole Role4 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.maja };
  public static readonly ModelWorkLocationTargetRole Role5 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Pychowicka };
  public static readonly ModelWorkLocationTargetRole Role6 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Wizjonerów };
  public static readonly ModelWorkLocationTargetRole Role7 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Grzegórzecka };
  public static readonly ModelWorkLocationTargetRole Role8 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Tarnów };
  public static readonly ModelWorkLocationTargetRole Role9 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Tarnow };
  public static readonly ModelWorkLocationTargetRole Role10 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Quattro };
  public static readonly ModelWorkLocationTargetRole Role11 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Rondo };
  public static readonly ModelWorkLocationTargetRole Role12 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Narama };
  public static readonly ModelWorkLocationTargetRole Role13 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Kielce };
  public static readonly ModelWorkLocationTargetRole Role14 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Piaskowa };
  public static readonly ModelWorkLocationTargetRole Role15 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Poleska };
  public static readonly ModelWorkLocationTargetRole Role16 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Mogilska };
  public static readonly ModelWorkLocationTargetRole Role17 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.Henniger };
  public static readonly ModelWorkLocationTargetRole Role18 = new() { RoleID = StorageRole.gardenerID, WorkLocationID = StorageWorkLocations.klimanowa };

  public static readonly IEnumerable<ModelWorkLocationTargetRole> WorkLocationRoles =
    [Role1, Role2, Role3, Role4, Role5, Role6, Role7, Role8, Role9, Role10, Role11, Role12, Role13, Role14, Role15, Role16, Role17, Role18];
}
