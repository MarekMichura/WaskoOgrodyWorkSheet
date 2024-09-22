class StorageWorkHour
{
  static private string userID(string name) =>
      StorageUser.Users.First(a => a.UserName == name).Id;

  static private string workLocID(string name) =>
    StorageWorkLocations.WorkLocations.First(a => a.Name == name).ID;

  static public IEnumerable<ModelWorkHour> WorkHours = _WorkHours().ToArray();
  static private IEnumerable<ModelWorkHour> _WorkHours()
  {
    yield return new()
    {
      ID = "6207db5f-ce52-4487-ace3-95dee130d36e",
      Date = new DateOnly(2024, 09, 20),
      WorkStart = new TimeOnly(6, 30),
      WorkEnd = new TimeOnly(12, 0),
      UserID = userID("user0"),
      AuthorID = userID("user0"),
      WorkLocationID = workLocID("3maja")
    };
    yield return new()
    {
      ID = "892d5b2e-940f-44c5-9e4e-6a91e252c6ef",
      Date = new DateOnly(2024, 09, 20),
      WorkStart = new TimeOnly(12, 0),
      WorkEnd = new TimeOnly(16, 0),
      UserID = userID("user0"),
      AuthorID = userID("admin"),
      WorkLocationID = workLocID("Pychowicka")
    };
  }
}