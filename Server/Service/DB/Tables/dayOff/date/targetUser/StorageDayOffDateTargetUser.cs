#if DEBUG
namespace Wasko;

public class StorageDayOffDateTargetUser {
  private static readonly ModelDayOffDateTargetUser DayOffTargetUser1 = new() {
    TargetID = StorageUser.Dima!,
    DayOffID = StorageDayOffDate.dayOffDima
  };

  private static readonly ModelDayOffDateTargetUser DayOffTargetUser2 = new() {
    TargetID = StorageUser.Eryk!,
    DayOffID = StorageDayOffDate.dayOffEryk2
  };

  private static readonly ModelDayOffDateTargetUser DayOffTargetUser3 = new() {
    TargetID = StorageUser.Eryk!,
    DayOffID = StorageDayOffDate.dayOffEryk1
  };

  private static readonly ModelDayOffDateTargetUser DayOffTargetUser4 = new() {
    TargetID = StorageUser.Loszka!,
    DayOffID = StorageDayOffDate.dayOffLoszka
  };

  public readonly static ModelDayOffDateTargetUser[] DaysOffTargets =
    [DayOffTargetUser1, DayOffTargetUser2, DayOffTargetUser3, DayOffTargetUser4];
}
#endif