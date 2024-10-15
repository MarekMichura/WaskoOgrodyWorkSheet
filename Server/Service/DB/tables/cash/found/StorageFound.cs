#if DEBUG
namespace Wasko;

public class StorageFound
{
  private static readonly ModelFound Found1 = new()
  {
    ID = "906c1da0-983d-4554-b960-057665a77766",
    CreatorID = StorageUser.Dima!,
    TargetID = StorageUser.Dima!,
    FoundDescription = "Nie podane",
    Founded = 70,
    Date = new DateOnly(2024, 06, 05)
  };

  private static readonly ModelFound Found2 = new()
  {
    ID = "5e594928-3c8e-4311-b3a9-9b8631ec2973",
    CreatorID = StorageUser.Dima!,
    TargetID = StorageUser.Dima!,
    FoundDescription = "Nie podane",
    Founded = 24,
    Date = new DateOnly(2024, 06, 15)
  };

  private static readonly ModelFound Found3 = new()
  {
    ID = "1a01e30c-c5df-483d-af05-79e181797407",
    CreatorID = StorageUser.Dima!,
    TargetID = StorageUser.Dima!,
    FoundDescription = "Nie podane",
    Founded = 20,
    Date = new DateOnly(2024, 06, 28)
  };

  // =================================================================================================== \\

  private static readonly ModelFound Found4 = new()
  {
    ID = "ce36031b-1e97-47a1-b276-aa287757195e",
    CreatorID = StorageUser.Loszka!,
    TargetID = StorageUser.Loszka!,
    FoundDescription = "Nie podane",
    Founded = 120,
    Date = new DateOnly(2024, 06, 03)
  };

  private static readonly ModelFound Found5 = new()
  {
    ID = "b0365983-d5d0-4d56-995a-8c5c06e90d45",
    CreatorID = StorageUser.Loszka!,
    TargetID = StorageUser.Loszka!,
    FoundDescription = "voda",
    Founded = 30,
    Date = new DateOnly(2024, 06, 18)
  };

  private static readonly ModelFound Found6 = new()
  {
    ID = "2f2c1ee4-cf09-4ba2-ae77-72245aa5351e",
    CreatorID = StorageUser.Loszka!,
    TargetID = StorageUser.Loszka!,
    FoundDescription = "drzewa",
    Founded = 80,
    Date = new DateOnly(2024, 06, 19)
  };

  private static readonly ModelFound Found7 = new()
  {
    ID = "07e2e81a-a2b1-4dcf-8bf5-1605e6e3a04a",
    CreatorID = StorageUser.Loszka!,
    TargetID = StorageUser.Loszka!,
    FoundDescription = "voda",
    Founded = 15,
    Date = new DateOnly(2024, 06, 21)
  };

  private static readonly ModelFound Found8 = new()
  {
    ID = "dc51017b-be23-4634-a021-59795fbdfa75",
    CreatorID = StorageUser.Loszka!,
    TargetID = StorageUser.Loszka!,
    FoundDescription = "rozhodnik",
    Founded = 864,
    Date = new DateOnly(2024, 06, 24)
  };

  // =================================================================================================== \\

  private static readonly ModelFound Found9 = new()
  {
    ID = "a3c1dd56-7e58-4200-ab5f-e23e83dc8df2",
    CreatorID = StorageUser.Eryk!,
    TargetID = StorageUser.Eryk!,
    FoundDescription = "sadzenie",
    Founded = 92,
    Date = new DateOnly(2024, 06, 21)
  };

  public static IEnumerable<ModelFound> Founds = [Found1, Found2, Found3, Found4, Found5, Found6, Found7, Found8, Found9];
}
#endif