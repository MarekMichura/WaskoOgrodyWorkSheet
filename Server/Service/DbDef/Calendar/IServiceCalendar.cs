namespace Wasko;

public struct CalendarResponse
{
  public IEnumerable<ModelDayOffDate> DayOffDates { get; set; }
  public IEnumerable<ModelDayOffExpression> DayOffExpressions { get; set; }
  public IEnumerable<ModelWorkHour> WorkHours { get; set; }
}

public interface IServiceCalendar
{
  CalendarResponse GetData(DateOnly start, DateOnly end);
}