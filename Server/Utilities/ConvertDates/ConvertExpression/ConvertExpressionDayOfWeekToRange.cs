namespace Wasko;

internal class ConvertExpressionDayOfWeekToRange : IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionDayOfWeekToRange(IConvertExpressionToRange convert, EnumDayOfWeek day)
  {
    var result = new List<DateOnlyRange>();
    var id = (int)day;

    foreach (var (start, end) in convert.Ranges) {
      var last = end ?? start;

      result.AddRange(new DateOnlyRange(start, last)
        .GetDates()
        .Select(date => new DateOnlyRange(date)));
    }

    Ranges = result;
  }
}
