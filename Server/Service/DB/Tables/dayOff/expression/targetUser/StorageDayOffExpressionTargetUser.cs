#if DEBUG
namespace Wasko;

public class StorageDayOffExpressionTargetUser {
  private static readonly ModelDayOffExpressionTargetUser DayOffTargetUser1 = new() {
    TargetID = StorageUser.Dima!,
    DayOffID = StorageDayOffExpression.free_day
  };

  public readonly static ModelDayOffExpressionTargetUser[] DaysOffTargets =
    [DayOffTargetUser1];
}
#endif
