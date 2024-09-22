class StorageDayOffDateTargetUser
{
  static public IEnumerable<ModelDayOffDateTargetUser> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffDateTargetUser> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageUser.Users.First(a => a.UserName == "user0").Id,
      DayOffID = StorageDayOffDate.DaysOff.First(a => a.Reason == "Wakacje user").ID
    };
  }
}