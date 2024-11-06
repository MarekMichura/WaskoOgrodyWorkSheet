namespace Wasko;

public static partial class Extend {
  public static IEnumerable<DateOnly> GetDates(this ModelDayOffDate model, DateOnly limitBegin, DateOnly limitEnd)
  {
    var start = new[] { model.StartDate, limitBegin }.Max();
    var end = new[] { model.StopActive, model.EndDate, limitEnd }.Where(date => date.HasValue).Min();

    for (var data = start; data < end; data = data.AddDays(1)) {
      yield return data;
    }
  }
}