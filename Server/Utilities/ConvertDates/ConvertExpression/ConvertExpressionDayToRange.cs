namespace Wasko;

internal class ConvertExpressionDayToRange : IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionDayToRange(IConvertExpressionToRange convert, byte day)
  {
    var result = new List<DateOnlyRange>();

    foreach (var (start, end) in convert.Ranges) {
      var last = end ?? start;

      if (start.Year == last.Year && start.Month == last.Month) {
        if (start.Day <= day && last.Day >= day) {
          result.Add(new(new DateOnly(start.Year, start.Month, day)));
        }
        continue;
      }

      if (start.Day <= day) {
        result.Add(new(new DateOnly(start.Year, start.Month, day)));
      }

      if (last.Day >= day) {
        result.Add(new(new DateOnly(last.Year, last.Month, day)));
      }

      for (var year = start.Year; year < last.Year; year++) {
        var max = year == last.Year ? last.Month : 12;
        for (var month = year == start.Year ? start.Month + 1 : 1; month < max; month++) {
          result.Add(new(new DateOnly(year, month, day)));
        }
      }
    }

    Ranges = result;
  }
}
