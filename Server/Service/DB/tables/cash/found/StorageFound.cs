namespace Wasko;

class StorageFound
{
  static public IEnumerable<ModelFound> Founds = _Founds().ToArray();

  static private IEnumerable<ModelFound> _Founds()
  {
    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new()
    {
      ID = "906c1da0-983d-4554-b960-057665a77766",
      CreatorID = StorageUser.getID("Dima"),
      TargetID = StorageUser.getID("Dima"),
      FoundDescription = "Nie podane",
      Founded = 70,
      Date = new DateOnly(2024, 06, 05)
    };
    yield return new()
    {
      ID = "5e594928-3c8e-4311-b3a9-9b8631ec2973",
      CreatorID = StorageUser.getID("Dima"),
      TargetID = StorageUser.getID("Dima"),
      FoundDescription = "Nie podane",
      Founded = 24,
      Date = new DateOnly(2024, 06, 15)
    };
    yield return new()
    {
      ID = "1a01e30c-c5df-483d-af05-79e181797407",
      CreatorID = StorageUser.getID("Dima"),
      TargetID = StorageUser.getID("Dima"),
      FoundDescription = "Nie podane",
      Founded = 20,
      Date = new DateOnly(2024, 06, 28)
    };

    // ===================================================================================================  \\ 

    yield return new()
    {
      ID = "ce36031b-1e97-47a1-b276-aa287757195e",
      CreatorID = StorageUser.getID("Loszka"),
      TargetID = StorageUser.getID("Loszka"),
      FoundDescription = "Nie podane",
      Founded = 120,
      Date = new DateOnly(2024, 06, 03)
    };
    yield return new()
    {
      ID = "b0365983-d5d0-4d56-995a-8c5c06e90d45",
      CreatorID = StorageUser.getID("Loszka"),
      TargetID = StorageUser.getID("Loszka"),
      FoundDescription = "voda",
      Founded = 30,
      Date = new DateOnly(2024, 06, 18)
    };
    yield return new()
    {
      ID = "2f2c1ee4-cf09-4ba2-ae77-72245aa5351e",
      CreatorID = StorageUser.getID("Loszka"),
      TargetID = StorageUser.getID("Loszka"),
      FoundDescription = "drzewa",
      Founded = 80,
      Date = new DateOnly(2024, 06, 19)
    };
    yield return new()
    {
      ID = "07e2e81a-a2b1-4dcf-8bf5-1605e6e3a04a",
      CreatorID = StorageUser.getID("Loszka"),
      TargetID = StorageUser.getID("Loszka"),
      FoundDescription = "voda",
      Founded = 15,
      Date = new DateOnly(2024, 06, 21)
    };
    yield return new()
    {
      ID = "dc51017b-be23-4634-a021-59795fbdfa75",
      CreatorID = StorageUser.getID("Loszka"),
      TargetID = StorageUser.getID("Loszka"),
      FoundDescription = "rozhodnik",
      Founded = 864,
      Date = new DateOnly(2024, 06, 24)
    };

    // ===================================================================================================  \\ 
    yield return new()
    {
      ID = "a3c1dd56-7e58-4200-ab5f-e23e83dc8df2",
      CreatorID = StorageUser.getID("Eryk"),
      TargetID = StorageUser.getID("Eryk"),
      FoundDescription = "sadzenie",
      Founded = 92,
      Date = new DateOnly(2024, 06, 21)
    };
  }
}