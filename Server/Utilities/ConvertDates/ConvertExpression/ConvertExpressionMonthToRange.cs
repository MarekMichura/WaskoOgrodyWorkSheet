namespace Wasko;

internal class ConvertExpressionMonthToRange : IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionMonthToRange(IConvertExpressionToRange convert, EnumMonth month)
  {
    var result = new List<DateOnlyRange>();
    var id = (int)month;

    foreach (var (start, end) in convert.Ranges) {
      var last = end ?? start;

      if (start.Year == last.Year) {
        if (start.Month <= id && last.Month >= id) {
          var rangeStart = new DateOnly(start.Year, id, start.Month == id ? start.Day : 1);
          var rangeEnd = new DateOnly(start.Year, id, last.Month == id ? last.Day : DateTime.DaysInMonth(start.Year, id));
          result.Add(new(rangeStart, rangeEnd));
        }
        continue;
      }

      if (start.Month <= id) {
        var rangeStart = new DateOnly(start.Year, id, start.Month == id ? start.Day : 1);
        var rangeEnd = new DateOnly(start.Year, id, DateTime.DaysInMonth(start.Year, id));
        result.Add(new(rangeStart, rangeEnd));
      }

      if (last.Month >= id) {
        var rangeStart = new DateOnly(last.Year, id, 1);
        var rangeEnd = new DateOnly(last.Year, id, last.Month == id ? last.Day : DateTime.DaysInMonth(start.Year, id));
        result.Add(new(rangeStart, rangeEnd));
      }

      for (var year = start.Year + 1; year < last.Year; year++) {
        var rangeStart = new DateOnly(year, id, 1);
        var rangeEnd = new DateOnly(year, id, DateTime.DaysInMonth(start.Year, id));
        result.Add(new(rangeStart, rangeEnd));
      }
    }

    Ranges = result;
  }
}
