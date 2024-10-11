#if DEBUG
namespace Wasko;

class StorageDayOffDateTargetUser
{
  static private readonly ModelDayOffDateTargetUser DayOffTargetUser1 = new()
  {
    TargetID = StorageUser.Dima!,
    DayOffID = StorageDayOffDate.dayOffDima
  };

  static private readonly ModelDayOffDateTargetUser DayOffTargetUser2 = new()
  {
    TargetID = StorageUser.Eryk!,
    DayOffID = StorageDayOffDate.dayOffEryk2
  };

  static private readonly ModelDayOffDateTargetUser DayOffTargetUser3 = new()
  {
    TargetID = StorageUser.Eryk!,
    DayOffID = StorageDayOffDate.dayOffEryk1
  };

  static private readonly ModelDayOffDateTargetUser DayOffTargetUser4 = new()
  {
    TargetID = StorageUser.Loszka!,
    DayOffID = StorageDayOffDate.dayOffLoszka
  };

  static public IEnumerable<ModelDayOffDateTargetUser> DaysOffTargets = [DayOffTargetUser1, DayOffTargetUser2, DayOffTargetUser3, DayOffTargetUser4];
}
#endif