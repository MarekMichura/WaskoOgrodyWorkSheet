class StorageDayOffExpressionTargetRole
{
  static public IEnumerable<ModelDayOffExpressionTargetRole> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffExpressionTargetRole> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageRole.Roles.First(a => a.Name == "PolishHolidays").Id,
      DayOffID = StorageDayOffExpression.DaysOff.First(a => a.Reason == "Święto z okazji święta").ID
    };
  }
}