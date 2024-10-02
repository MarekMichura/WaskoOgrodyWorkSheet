#if DEBUG
namespace Wasko;

class StorageUserSalary
{
  static public IEnumerable<ModelUserSalary> Salaries = _Salaries();

  static private IEnumerable<ModelUserSalary> _Salaries()
  {
    yield return new()
    {
      ID = StorageUser.Dima,
      ApproverID = StorageUser.admin,
      Date = new DateOnly(2024, 8, 1),
      HourlySalary = 30
    };
    yield return new()
    {
      ID = StorageUser.Loszka,
      ApproverID = StorageUser.admin,
      Date = new DateOnly(2024, 8, 1),
      HourlySalary = 30
    };
    yield return new()
    {
      ID = StorageUser.Eryk,
      ApproverID = StorageUser.admin,
      Date = new DateOnly(2024, 8, 1),
      HourlySalary = 26
    };
  }
}
#endif