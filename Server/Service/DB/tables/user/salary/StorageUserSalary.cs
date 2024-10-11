#if DEBUG
namespace Wasko;

class StorageUserSalary
{
  static private readonly ModelUserSalary SalaryDima = new()
  {
    ID = StorageUser.Dima!,
    ApproverID = StorageUser.admin!,
    Date = new DateOnly(2024, 8, 1),
    HourlySalary = 30
  };

  static private readonly ModelUserSalary SalaryLoszka = new()
  {
    ID = StorageUser.Loszka!,
    ApproverID = StorageUser.admin!,
    Date = new DateOnly(2024, 8, 1),
    HourlySalary = 30
  };

  static private readonly ModelUserSalary SalaryEryk = new()
  {
    ID = StorageUser.Eryk!,
    ApproverID = StorageUser.admin!,
    Date = new DateOnly(2024, 8, 1),
    HourlySalary = 26
  };

  static public IEnumerable<ModelUserSalary> Salaries = [SalaryDima, SalaryLoszka, SalaryEryk];
}
#endif
