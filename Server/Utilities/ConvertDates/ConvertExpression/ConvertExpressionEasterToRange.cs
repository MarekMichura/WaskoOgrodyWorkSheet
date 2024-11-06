namespace Wasko;

class ConvertExpressionEasterToRange : IConvertExpressionToRange
{
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionEasterToRange(IConvertExpressionToRange convert, short day)
  {
    var result = new List<DateOnlyRange>();

    foreach (var range in convert.Ranges)
    {
      var (start, _end) = range;
      var end = _end ?? start;

      if (start.Year == end.Year)
      {
        var date = Easter.DateAfterEastern(day, start.Year);
        if (date >= start && date <= end)
        {
          result.Add(new(date));
        }
        continue;
      }
      var startDate = Easter.DateAfterEastern(day, start.Year);
      var endDate = Easter.DateAfterEastern(day, end.Year);
      if (start >= startDate)
      {
        result.Add(new(startDate));
      }
      if (end <= endDate)
      {
        result.Add(new(endDate));
      }

      for (var year = start.Year + 1; year < end.Year; year++)
      {
        result.Add(new(Easter.DateAfterEastern(day, year)));
      }
    }

    Ranges = result;
  }
}
