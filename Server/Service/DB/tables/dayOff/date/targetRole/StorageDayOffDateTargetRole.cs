#if DEBUG

namespace Wasko;

class StorageDayOffDateTargetRole
{
  static public IEnumerable<ModelDayOffDateTargetRole> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffDateTargetRole> _DaysOffTargets()
  {
    yield return new()
    {
      TargetID = StorageRole.employerID,
      DayOffID = StorageDayOffDate.dayOffAuthor
    };
  }
}

#endif