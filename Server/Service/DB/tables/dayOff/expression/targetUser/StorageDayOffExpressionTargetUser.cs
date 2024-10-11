#if DEBUG
namespace Wasko;

class StorageDayOffExpressionTargetUser
{
  static private readonly ModelDayOffExpressionTargetUser DayOffTargetUser1 = new()
  {
    TargetID = StorageUser.Dima!,
    DayOffID = StorageDayOffExpression.free_day
  };

  static public IEnumerable<ModelDayOffExpressionTargetUser> DaysOffTargets = [DayOffTargetUser1];
}
#endif
