namespace Wasko;

public class StorageDayOffExpressionTargetRole {
  private static readonly ModelDayOffExpressionTargetRole DayOffTarget1 = new() {
    DayOffID = StorageDayOffExpression.free_saturdays,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget2 = new() {
    DayOffID = StorageDayOffExpression.free_sundays,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget3 = new() {
    DayOffID = StorageDayOffExpression.new_year,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget4 = new() {
    DayOffID = StorageDayOffExpression.epiphany,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget5 = new() {
    DayOffID = StorageDayOffExpression.labor_day,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget6 = new() {
    DayOffID = StorageDayOffExpression.constitution_day,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget7 = new() {
    DayOffID = StorageDayOffExpression.assumption,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget8 = new() {
    DayOffID = StorageDayOffExpression.all_saints_day,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget9 = new() {
    DayOffID = StorageDayOffExpression.independence_day,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget10 = new() {
    DayOffID = StorageDayOffExpression.christmas_day_first,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget11 = new() {
    DayOffID = StorageDayOffExpression.christmas_day_second,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget12 = new() {
    DayOffID = StorageDayOffExpression.easter,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget13 = new() {
    DayOffID = StorageDayOffExpression.easter_monday,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget14 = new() {
    DayOffID = StorageDayOffExpression.pentecost,
    TargetID = StorageRole.polishHolidaysID!
  };

  private static readonly ModelDayOffExpressionTargetRole DayOffTarget15 = new() {
    DayOffID = StorageDayOffExpression.corpus_christi,
    TargetID = StorageRole.polishHolidaysID!
  };

  public readonly static ModelDayOffExpressionTargetRole[] DaysOffTargets =
    [DayOffTarget1, DayOffTarget2, DayOffTarget3, DayOffTarget4, DayOffTarget5, DayOffTarget6, DayOffTarget7, DayOffTarget8, DayOffTarget9, DayOffTarget10, DayOffTarget11, DayOffTarget12, DayOffTarget13, DayOffTarget14, DayOffTarget15];
}
