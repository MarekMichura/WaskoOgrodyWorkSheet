namespace Wasko;

class StorageDayOffDate
{
  static public IEnumerable<ModelDayOffDate> DaysOff = _DaysOff().ToArray();
  static private IEnumerable<ModelDayOffDate> _DaysOff()
  {
    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new()
    {
      ID = "0e3f76fc-7878-44e2-acf3-8f8a262ace1c",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.getID("Dima"),

      StartDate = new DateOnly(2024, 06, 24),
    };

    yield return new()
    {
      ID = "fb981f9c-f565-49b6-a126-881d7d706f59",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.getID("Loszka"),

      StartDate = new DateOnly(2024, 06, 7),
    };

    yield return new()
    {
      ID = "c8011577-6247-419b-8695-1f8278c3c180",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.getID("Eryk"),

      StartDate = new DateOnly(2024, 06, 4),
    };
    yield return new()
    {
      ID = "3ee7fe12-ec83-444b-a064-9559eca11ba2",
      Off = true,
      Reason = "Niezaplanowana nieobecność",
      AuthorID = StorageUser.getID("Eryk"),

      StartDate = new DateOnly(2024, 06, 25),
    };
  }
}