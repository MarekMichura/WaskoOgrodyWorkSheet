namespace Wasko;

internal readonly struct DateOnlyRange(DateOnly start, DateOnly? end = null) {
  public readonly DateOnly start = start;
  public readonly DateOnly? end = end;

  internal readonly void Deconstruct(out DateOnly start, out DateOnly? end)
  {
    start = this.start;
    end = this.end;
  }

  public DateOnly[] GetDates()
  {
    if (end is null) {
      return [start];
    }

    int daysDifference = end.Value.DayNumber - start.DayNumber + 1;
    var result = new DateOnly[daysDifference];
    for (var i = 0; i < daysDifference; i++) {
      result[i] = start.AddDays(i);
    }

    return result;
  }
}
