namespace Wasko;

class ConvertExpressionMonthToRange : IConvertExpressionToRange
{
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionMonthToRange(IConvertExpressionToRange convert, EnumMonth month)
  {
    var result = new List<DateOnlyRange>();
    var id = (int)month;

    foreach (var range in convert.Ranges)
    {
      var (start, _end) = range;
      var end = _end ?? start;

      if (start.Year == end.Year)
      {
        if (start.Month <= id && end.Month >= id)
        {
          var rangeStart = new DateOnly(start.Year, id, start.Month == id ? start.Day : 1);
          var rangeEnd = new DateOnly(start.Year, id, end.Month == id ? end.Day : DateTime.DaysInMonth(start.Year, id));
          result.Add(new(rangeStart, rangeEnd));
        }
        continue;
      }

      if (start.Month <= id)
      {
        var rangeStart = new DateOnly(start.Year, id, start.Month == id ? start.Day : 1);
        var rangeEnd = new DateOnly(start.Year, id, DateTime.DaysInMonth(start.Year, id));
        result.Add(new(rangeStart, rangeEnd));
      }

      if (end.Month >= id)
      {
        var rangeStart = new DateOnly(end.Year, id, 1);
        var rangeEnd = new DateOnly(end.Year, id, end.Month == id ? end.Day : DateTime.DaysInMonth(start.Year, id));
        result.Add(new(rangeStart, rangeEnd));
      }

      for (var year = start.Year + 1; year < end.Year; year++)
      {
        var rangeStart = new DateOnly(year, id, 1);
        var rangeEnd = new DateOnly(year, id, DateTime.DaysInMonth(start.Year, id));
        result.Add(new(rangeStart, rangeEnd));
      }
    }

    Ranges = result;
  }
}
