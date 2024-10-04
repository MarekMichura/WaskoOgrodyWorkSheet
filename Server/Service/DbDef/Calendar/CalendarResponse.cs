namespace Wasko;

struct CalendarResponse
{
  public IEnumerable<ModelDayOffDate> dayOffDates { get; set; }
  public IEnumerable<ModelDayOffExpression> dayOffExpressions { get; set; }
  public IEnumerable<ModelWorkHour> workHours { get; set; }
}
