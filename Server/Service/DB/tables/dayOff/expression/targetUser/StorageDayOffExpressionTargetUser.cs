class StorageDayOffExpressionTargetUser
{
  static public IEnumerable<ModelDayOffExpressionTargetUser> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffExpressionTargetUser> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageUser.Users.First(a => a.UserName == "user0").Id,
      DayOffID = StorageDayOffExpression.DaysOff.First(a => a.Reason == "Zaplanowana coroczna wizyta w szpitalu").ID
    };
  }
}