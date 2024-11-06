namespace Wasko;

internal interface IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public IEnumerable<DateOnly> GetDates()
  {
    return Ranges
      .SelectMany(static a => a.GetDates())
      .Distinct()
      .Order();
  }
}
