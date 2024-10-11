#if DEBUG

namespace Wasko;

class StorageDayOffDateTargetRole
{
  static private readonly ModelDayOffDateTargetRole DayOffTarget1 = new()
  {
    TargetID = StorageRole.employerID!,
    DayOffID = StorageDayOffDate.dayOffAuthor
  };

  static public IEnumerable<ModelDayOffDateTargetRole> DaysOffTargets = [DayOffTarget1];
}

#endif