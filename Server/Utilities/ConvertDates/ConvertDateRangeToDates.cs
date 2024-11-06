namespace Wasko;

public static partial class Extend {
  public static DateOnly[] GetDates(this ModelDayOffDate model, DateOnly limitBegin, DateOnly limitEnd)
  {
    var start = new[] { model.StartDate, limitBegin }.Max();
    var end = new[] { model.StopActive, model.EndDate, limitEnd }.Where(date => date.HasValue).Min();

    return new DateOnlyRange(start, end).GetDates();
  }
}