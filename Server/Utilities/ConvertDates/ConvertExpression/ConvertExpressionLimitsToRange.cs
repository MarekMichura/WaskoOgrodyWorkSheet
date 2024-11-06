namespace Wasko;

class ConvertExpressionLimitsToRange : IConvertExpressionToRange {
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public ConvertExpressionLimitsToRange(DateOnly start, DateOnly end, DateOnly? stopActive)
  {
    if (stopActive == null) {
      Ranges = [new(start, end)];
      return;
    }
    if (start < stopActive) {
      Ranges = [];
      return;
    }
    if (end < stopActive) {
      Ranges = [new(start, stopActive)];
      return;
    }
    Ranges = [new(start, end)];
  }
}
