#if DEBUG
namespace Wasko;

class StorageDayOffDate
{
  static public IEnumerable<ModelDayOffDate> DaysOff = _DaysOff().ToArray();
  static private IEnumerable<ModelDayOffDate> _DaysOff()
  {
    yield return new()
    {
      ID = "0e3f76fc-7878-44e2-acf3-8f8a262ace1c",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.Dima,

      StartDate = new DateOnly(2024, 06, 24),
    };

    yield return new()
    {
      ID = "fb981f9c-f565-49b6-a126-881d7d706f59",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.Loszka,

      StartDate = new DateOnly(2024, 06, 7),
    };

    yield return new()
    {
      ID = "c8011577-6247-419b-8695-1f8278c3c180",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.Eryk,

      StartDate = new DateOnly(2024, 06, 4),
    };
    yield return new()
    {
      ID = "3ee7fe12-ec83-444b-a064-9559eca11ba2",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.Eryk,

      StartDate = new DateOnly(2024, 06, 25),
    };
    yield return new()
    {
      ID = "c2b5dea3-85fc-469e-a265-088a7feb2172",
      Off = true,
      Reason = "Wolne z powodu widzi mi się autora",
      AuthorID = StorageUser.admin,

      StartDate = new DateOnly(2024, 07, 1),
      EndDate = new DateOnly(2024, 07, 10),
    };
  }

  static public string dayOffDima = DaysOff.First(a => a.AuthorID == StorageUser.Dima).ID;
  static public string dayOffLoszka = DaysOff.First(a => a.AuthorID == StorageUser.Loszka).ID;
  static public string dayOffEryk1 = DaysOff.First(a => a.AuthorID == StorageUser.Eryk).ID;
  static public string dayOffEryk2 = DaysOff.Last(a => a.AuthorID == StorageUser.Eryk).ID;
  static public string dayOffAuthor = DaysOff.First(a => a.AuthorID == StorageUser.admin).ID;
}
#endif