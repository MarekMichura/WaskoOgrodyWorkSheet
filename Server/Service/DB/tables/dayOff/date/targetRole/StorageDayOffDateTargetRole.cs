class StorageDayOffDateTargetRole
{
  static public IEnumerable<ModelDayOffDateTargetRole> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffDateTargetRole> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageRole.Roles.First(a => a.Name == "PolishHolidays").Id,
      DayOffID = StorageDayOffDate.DaysOff.First(a => a.Reason == "Test dla polskich wakacji").ID
    };
  }
}
