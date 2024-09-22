class StorageProfil
{
  static public IEnumerable<ModelProfil> Profiles = _Profiles().ToArray();
  static private IEnumerable<ModelProfil> _Profiles()
  {
    yield return new()
    {
      ID = StorageUser.Users.First(a => a.UserName == "admin").Id,
      FirstName = "admin name",
      LastName = "admin last name",
      WorkStartDate = new DateOnly(2023, 7, 1)
    };
    yield return new()
    {
      ID = StorageUser.Users.First(a => a.UserName == "user0").Id,
      FirstName = "user name",
      LastName = "user last name",
      WorkStartDate = new DateOnly(2023, 4, 1)
    };
  }
}