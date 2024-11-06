namespace Wasko;

internal class ConvertExpressionEasterToRange : IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionEasterToRange(IConvertExpressionToRange convert, short day)
  {
    var result = new List<DateOnlyRange>();

    foreach (var (start, end) in convert.Ranges) {
      var last = end ?? start;

      if (start.Year == last.Year) {
        var date = Easter.DateAfterEastern(day, start.Year);
        if (date >= start && date <= last) {
          result.Add(new(date));
        }
        continue;
      }
      var startDate = Easter.DateAfterEastern(day, start.Year);
      var endDate = Easter.DateAfterEastern(day, last.Year);
      if (start >= startDate) {
        result.Add(new(startDate));
      }
      if (last <= endDate) {
        result.Add(new(endDate));
      }

      for (var year = start.Year + 1; year < last.Year; year++) {
        result.Add(new(Easter.DateAfterEastern(day, year)));
      }
    }

    Ranges = result;
  }
}
