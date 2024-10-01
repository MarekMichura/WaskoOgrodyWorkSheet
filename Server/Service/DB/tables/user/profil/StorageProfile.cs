namespace Wasko;

class StorageProfil
{
  static public IEnumerable<ModelProfil> Profiles = _Profiles().ToArray();
  static private IEnumerable<ModelProfil> _Profiles()
  {
    yield return new()
    {
      ID = StorageUser.getID("admin"),
      FirstName = "admin",
      LastName = "admin",
      WorkStartDate = new DateOnly(2024, 1, 1)
    };

    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new()
    {
      ID = StorageUser.getID("Eryk"),
      FirstName = "Eryk",
      LastName = "IDK",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
    yield return new()
    {
      ID = StorageUser.getID("Loszka"),
      FirstName = "Loszka",
      LastName = "IDK",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
    yield return new()
    {
      ID = StorageUser.getID("Dima"),
      FirstName = "Dima",
      LastName = "IDK",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
  }
}