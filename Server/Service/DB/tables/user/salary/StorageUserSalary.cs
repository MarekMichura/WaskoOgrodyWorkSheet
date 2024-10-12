#if DEBUG
namespace Wasko;

class StorageUserSalary
{
  private static readonly ModelUserSalary SalaryDima = new()
  {
    ID = StorageUser.Dima!,
    ApproverID = StorageUser.admin!,
    Date = new DateOnly(2024, 8, 1),
    HourlySalary = 30
  };

  private static readonly ModelUserSalary SalaryLoszka = new()
  {
    ID = StorageUser.Loszka!,
    ApproverID = StorageUser.admin!,
    Date = new DateOnly(2024, 8, 1),
    HourlySalary = 30
  };

  private static readonly ModelUserSalary SalaryEryk = new()
  {
    ID = StorageUser.Eryk!,
    ApproverID = StorageUser.admin!,
    Date = new DateOnly(2024, 8, 1),
    HourlySalary = 26
  };

  public static IEnumerable<ModelUserSalary> Salaries = [SalaryDima, SalaryLoszka, SalaryEryk];
}
#endif
