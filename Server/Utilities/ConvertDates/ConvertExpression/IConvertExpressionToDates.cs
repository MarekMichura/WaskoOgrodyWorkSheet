using System.Collections;

namespace Wasko;

readonly struct DateOnlyRange(DateOnly start, DateOnly? end = null)
{
  public readonly DateOnly start = start;
  public readonly DateOnly? end = end;

  internal readonly void Deconstruct(out DateOnly start, out DateOnly? end)
  {
    start = this.start;
    end = this.end;
  }

  public IEnumerable<DateOnly> GetElements()
  {
    if (end is null)
    {
      yield return start;
      yield break;
    }

    int daysDifference = end.Value.DayNumber - start.DayNumber + 1;
    for (var i = 0; i < daysDifference; i++)
    {
      yield return start.AddDays(i);
    }
  }
}

interface IConvertExpressionToRange
{
  public IReadOnlyList<DateOnlyRange> Ranges { get; init; }

  public List<DateOnly> ToList() =>
    Ranges.SelectMany(static a => a.GetElements()).Order().ToList();
}
