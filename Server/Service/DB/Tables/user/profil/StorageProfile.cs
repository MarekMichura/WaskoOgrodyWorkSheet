namespace Wasko;

public class StorageProfil {
  private static readonly ModelProfil ProfileAdmin = new() {
    ID = StorageUser.Admin!,
    FirstName = "Marek",
    LastName = "Michura",
    WorkStartDate = new DateOnly(2000, 1, 1)
  };

#if DEBUG
  private static readonly ModelProfil ProfileUser = new() {
    ID = StorageUser.User!,
    FirstName = "User",
    LastName = "test",
    WorkStartDate = new DateOnly(2020, 8, 1)
  };

  private static readonly ModelProfil ProfileEryk = new() {
    ID = StorageUser.Eryk!,
    FirstName = "Eryk",
    LastName = "IDK",
    WorkStartDate = new DateOnly(2024, 4, 1)
  };

  private static readonly ModelProfil ProfileLoszka = new() {
    ID = StorageUser.Loszka!,
    FirstName = "Loszka",
    LastName = "IDK",
    WorkStartDate = new DateOnly(2024, 3, 1)
  };

  private static readonly ModelProfil ProfileDima = new() {
    ID = StorageUser.Dima!,
    FirstName = "Dima",
    LastName = "IDK",
    WorkStartDate = new DateOnly(2024, 5, 1)
  };
#endif

#if DEBUG
  public readonly static ModelProfil[] Profiles =
    [ProfileUser, ProfileEryk, ProfileLoszka, ProfileDima, ProfileAdmin];
#else
  static readonly public ModelProfil[] Profiles = 
    [ProfileAdmin];
#endif
}
