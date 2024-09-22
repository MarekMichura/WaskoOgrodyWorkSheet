class StorageDayOffDate
{
  static private string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  static public IEnumerable<ModelDayOffDate> DaysOff = _DaysOff().ToArray();
  static private IEnumerable<ModelDayOffDate> _DaysOff()
  {
    yield return new()
    {
      ID = "1cdbab92-083e-4574-aa72-b618e37954ad",
      Off = true,
      Reason = "Wakacje user",
      AuthorID = userID("user0"),
      ApproverID = userID("admin"),

      StartDate = new DateOnly(2024, 09, 1),
      EndDate = new DateOnly(2024, 09, 15),
    };
    yield return new()
    {
      ID = "5ab2ab49-89aa-466c-8204-ec3142bfda23",
      Off = true,
      Reason = "Test dla polskich wakacji",
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      StartDate = new DateOnly(2024, 09, 16),
      EndDate = new DateOnly(2024, 09, 30),
    };
  }
}