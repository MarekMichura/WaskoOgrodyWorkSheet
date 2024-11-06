namespace Wasko;

class ConvertExpressionDayToRange : IConvertExpressionToRange
{
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionDayToRange(IConvertExpressionToRange convert, byte day)
  {
    var result = new List<DateOnlyRange>();

    foreach (var range in convert.Ranges)
    {
      var (start, _end) = range;
      var end = _end ?? start;

      if (start.Year == end.Year && start.Month == end.Month)
      {
        if (start.Day <= day && end.Day >= day)
        {
          result.Add(new(new DateOnly(start.Year, start.Month, day)));
        }
        continue;
      }

      if (start.Day <= day)
      {
        result.Add(new(new DateOnly(start.Year, start.Month, day)));
      }

      if (end.Day >= day)
      {
        result.Add(new(new DateOnly(end.Year, end.Month, day)));
      }

      for (var year = start.Year; year < end.Year; year++)
      {
        var max = year == end.Year ? end.Month : 12;
        for (var month = year == start.Year ? start.Month + 1 : 1; month < max; month++)
        {
          result.Add(new(new DateOnly(year, month, day)));
        }
      }
    }

    Ranges = result;
  }
}
