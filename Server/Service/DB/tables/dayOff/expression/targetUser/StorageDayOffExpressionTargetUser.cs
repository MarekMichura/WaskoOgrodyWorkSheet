#if DEBUG
namespace Wasko;

class StorageDayOffExpressionTargetUser
{
  static public IEnumerable<ModelDayOffExpressionTargetUser> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffExpressionTargetUser> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageUser.Dima,
      DayOffID = StorageDayOffExpression.wolne,
    };
  }
}
#endif