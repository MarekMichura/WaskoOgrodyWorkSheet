namespace Wasko;

class StorageProfil
{
  static private readonly ModelProfil ProfileAdmin = new()
  {
    ID = StorageUser.admin!,
    FirstName = "Marek",
    LastName = "Michura",
    WorkStartDate = new DateOnly(2000, 1, 1)
  };

#if DEBUG
  static private readonly ModelProfil ProfileUser = new()
  {
    ID = StorageUser.user!,
    FirstName = "User",
    LastName = "test",
    WorkStartDate = new DateOnly(2024, 8, 1)
  };

  static private readonly ModelProfil ProfileEryk = new()
  {
    ID = StorageUser.Eryk!,
    FirstName = "Eryk",
    LastName = "IDK",
    WorkStartDate = new DateOnly(2024, 8, 1)
  };

  static private readonly ModelProfil ProfileLoszka = new()
  {
    ID = StorageUser.Loszka!,
    FirstName = "Loszka",
    LastName = "IDK",
    WorkStartDate = new DateOnly(2024, 8, 1)
  };

  static private readonly ModelProfil ProfileDima = new()
  {
    ID = StorageUser.Dima!,
    FirstName = "Dima",
    LastName = "IDK",
    WorkStartDate = new DateOnly(2024, 8, 1)
  };
#endif

#if DEBUG
  static public IEnumerable<ModelProfil> Profiles = [ProfileUser, ProfileEryk, ProfileLoszka, ProfileDima, ProfileAdmin];
#else
  static public IEnumerable<ModelProfil> Profiles = [ProfileAdmin];
#endif
}
