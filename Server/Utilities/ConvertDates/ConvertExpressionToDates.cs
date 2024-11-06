namespace Wasko;

public static partial class Extend {
  public static IEnumerable<DateOnly> GetDates(this ModelDayOffExpression model, DateOnly limitBegin, DateOnly limitEnd)
  {
    IConvertExpressionToRange convert = new ConvertExpressionLimitsToRange(limitBegin, limitEnd, model.StopActive);
    if (model.Year is not null) convert = new ConvertExpressionYearToRange(convert, model.Year.Value);
    if (model.Month is not null) convert = new ConvertExpressionMonthToRange(convert, model.Month.Value);
    if (model.Day is not null) convert = new ConvertExpressionDayToRange(convert, model.Day.Value);
    if (model.DayOfWeek is not null) convert = new ConvertExpressionDayOfWeekToRange(convert, model.DayOfWeek.Value);
    if (model.DaysAfterEaster is not null) convert = new ConvertExpressionEasterToRange(convert, model.DaysAfterEaster.Value);

    return convert.GetDates();
  }
}