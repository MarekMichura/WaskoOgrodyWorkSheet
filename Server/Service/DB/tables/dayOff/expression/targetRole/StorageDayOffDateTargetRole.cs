namespace Wasko;

class StorageDayOffExpressionTargetRole
{ 
  static public IEnumerable<ModelDayOffExpressionTargetRole> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffExpressionTargetRole> _DaysOffTargets()
  {
    foreach (var day in StorageDayOffExpression.PolishHolidays)
    {
      if (day is null) continue;
      // yield return new()
      // {
      //   TargetID = StorageRole.getID("Polskie święta"),
      //   DayOffID = day.ID
      // };
    }
    yield break;
  }
}