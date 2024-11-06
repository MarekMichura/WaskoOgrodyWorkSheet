namespace Wasko;

class ConvertExpressionDayOfWeekToRange : IConvertExpressionToRange
{
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionDayOfWeekToRange(IConvertExpressionToRange convert, EnumDayOfWeek day)
  {
    var result = new List<DateOnlyRange>();
    var id = (int)day;

    foreach (var range in convert.Ranges)
    {
      var (start, _end) = range;
      var end = _end ?? start;

      var date = start.AddDays((id - (int)start.DayOfWeek + 7) % 7);
      for (; date <= end; date = date.AddDays(7))
      {
        result.Add(new(date));
      }
    }

    Ranges = result;
  }
}
