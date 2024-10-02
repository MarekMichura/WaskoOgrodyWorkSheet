#if DEBUG
namespace Wasko;

class StorageDayOffDateTargetUser
{
  static public IEnumerable<ModelDayOffDateTargetUser> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffDateTargetUser> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageUser.Dima,
      DayOffID = StorageDayOffDate.dayOffDima
    };
    yield return new()
    {
      TargetID = StorageUser.Eryk,
      DayOffID = StorageDayOffDate.dayOffEryk2
    };
    yield return new()
    {
      TargetID = StorageUser.Eryk,
      DayOffID = StorageDayOffDate.dayOffEryk1
    };
    yield return new()
    {
      TargetID = StorageUser.Loszka,
      DayOffID = StorageDayOffDate.dayOffLoszka
    };
  }
}
#endif