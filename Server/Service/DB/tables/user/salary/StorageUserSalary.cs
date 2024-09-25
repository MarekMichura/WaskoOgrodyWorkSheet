namespace Wasko;

class StorageUserSalary
{
  static public IEnumerable<ModelUserSalary> Salaries = _Salaries();

  static private IEnumerable<ModelUserSalary> _Salaries()
  {
    yield return new()
    {
      ID = StorageUser.getID("Dima"),
      ApproverID = StorageUser.getID("admin"),
      Date = new DateOnly(2024, 8, 1),
      HourlySalary = 30
    };
    yield return new()
    {
      ID = StorageUser.getID("Loszka"),
      ApproverID = StorageUser.getID("admin"),
      Date = new DateOnly(2024, 8, 1),
      HourlySalary = 30
    };
    yield return new()
    {
      ID = StorageUser.getID("Eryk"),
      ApproverID = StorageUser.getID("admin"),
      Date = new DateOnly(2024, 8, 1),
      HourlySalary = 26
    };
  }
}