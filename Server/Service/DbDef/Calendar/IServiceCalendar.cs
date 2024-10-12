namespace Wasko;

struct CalendarResponse
{
  public IEnumerable<ModelDayOffDate> DayOffDates { get; set; }
  public IEnumerable<ModelDayOffExpression> DayOffExpressions { get; set; }
  public IEnumerable<ModelWorkHour> WorkHours { get; set; }
}

interface IServiceCalendar
{
  CalendarResponse GetData(DateOnly start, DateOnly end);
}