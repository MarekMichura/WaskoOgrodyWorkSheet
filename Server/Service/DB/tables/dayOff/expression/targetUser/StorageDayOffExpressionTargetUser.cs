#if DEBUG
namespace Wasko;

class StorageDayOffExpressionTargetUser
{
  private static readonly ModelDayOffExpressionTargetUser DayOffTargetUser1 = new()
  {
    TargetID = StorageUser.Dima!,
    DayOffID = StorageDayOffExpression.free_day
  };

  public static IEnumerable<ModelDayOffExpressionTargetUser> DaysOffTargets = [DayOffTargetUser1];
}
#endif
