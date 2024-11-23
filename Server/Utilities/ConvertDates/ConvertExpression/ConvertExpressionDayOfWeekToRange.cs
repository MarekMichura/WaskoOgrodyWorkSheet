namespace Wasko;

internal class ConvertExpressionDayOfWeekToRange : IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionDayOfWeekToRange(IConvertExpressionToRange convert, EnumDayOfWeek day)
  {
    var result = new List<DateOnlyRange>();
    var id = (int)day;

    foreach (var (start, end) in convert.Ranges) {
      var last = end ?? start;
      var startDay = (int)start.DayOfWeek;
      var lenghtToDay = startDay > id ? (7 - startDay) + id : id - startDay;

      for (var i = start.AddDays(lenghtToDay); i <= end; i = i.AddDays(7)) {
        result.Add(new(i));
      }
    }

    Ranges = result;
  }
}
