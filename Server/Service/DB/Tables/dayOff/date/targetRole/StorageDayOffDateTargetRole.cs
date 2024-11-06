#if DEBUG

namespace Wasko;

public class StorageDayOffDateTargetRole {
  private static readonly ModelDayOffDateTargetRole DayOffTarget1 = new() {
    TargetID = StorageRole.employerID!,
    DayOffID = StorageDayOffDate.dayOffAuthor
  };

  public readonly static ModelDayOffDateTargetRole[] DaysOffTargets =
    [DayOffTarget1];
}

#endif