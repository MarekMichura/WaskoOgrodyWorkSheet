namespace Wasko;

class StorageProfil
{
  static public IEnumerable<ModelProfil> Profiles = _Profiles().ToArray();
  static private IEnumerable<ModelProfil> _Profiles()
  {
    yield return new()
    {
      ID = StorageUser.admin,
      FirstName = "Marek",
      LastName = "Michura",
      WorkStartDate = new DateOnly(2000, 1, 1)
    };

#if DEBUG
    yield return new()
    {
      ID = StorageUser.user,
      FirstName = "User",
      LastName = "test",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
    yield return new()
    {
      ID = StorageUser.Eryk,
      FirstName = "Eryk",
      LastName = "IDK",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
    yield return new()
    {
      ID = StorageUser.Loszka,
      FirstName = "Loszka",
      LastName = "IDK",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
    yield return new()
    {
      ID = StorageUser.Dima,
      FirstName = "Dima",
      LastName = "IDK",
      WorkStartDate = new DateOnly(2024, 8, 1)
    };
#endif
  }
}