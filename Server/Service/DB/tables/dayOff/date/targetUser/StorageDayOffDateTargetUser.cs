namespace Wasko;

class StorageDayOffDateTargetUser
{
  static public IEnumerable<ModelDayOffDateTargetUser> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffDateTargetUser> _DaysOffTargets()
  {
    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    foreach (var date in StorageDayOffDate.DaysOff)
    {
      yield return new()
      {
        TargetID = date.AuthorID,
        DayOffID = date.ID
      };
    }
  }
}