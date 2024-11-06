
namespace Wasko;

class ConvertExpressionYearToRange : IConvertExpressionToRange
{
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionYearToRange(IConvertExpressionToRange convert, short year)
  {
    var result = new List<DateOnlyRange>();

    foreach (var range in convert.Ranges)
    {
      var (start, end) = range;
      var min = new DateOnly(year, 1, 1);
      var max = new DateOnly(year, 12, 31);

      var rangeStart = start > min ? start : min;
      var rangeEnd = end < max ? end : max;

      if (rangeStart <= rangeEnd)
        result.Add(new(rangeStart, rangeEnd));
    }

    Ranges = result;
  }

}
