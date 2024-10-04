namespace Wasko;

partial class ServiceCalendar : IServiceCalendar
{
  DatabaseContext _context;
  IServiceUser _user;

  public ServiceCalendar(DatabaseContext context, IServiceUser user)
  {
    _context = context;
    _user = user;
  }

  public CalendarResponse GetData(EnumMonth month, int year)
  {
    var current = _user.GetCurrentUser() ?? throw new NullReferenceException();
    var firstDay = new DateOnly(year, (int)month, 1);
    var lastDay = firstDay.AddMonths(1);

    var DayOffDates = _context.DayOffDates
      .Where(a => a.StartDate <= lastDay && firstDay <= a.EndDate)
      .Include(a => a.TargetsRole)
      .Where(a => a.TargetsRole.Any(b => current.Roles.Contains(b)) || !a.TargetsRole.Any())
      .Include(a => a.TargetsUser)
      .Where(a => a.TargetsUser.Any(b => b.UserName == current.UserName) || !a.TargetsUser.Any())
      .ToList();

    var DayOffExpression = _context.DayOffExpression
      .Where(a =>
        (a.Year == null || a.Year == year) &&
        (a.Month == null || a.Month == month))
      .Include(a => a.TargetsRole)
      .Where(a => a.TargetsRole.Any(b => current.Roles.Contains(b)) || !a.TargetsRole.Any())
      .Include(a => a.TargetsUser)
      .Where(a => a.TargetsUser.Any(b => b.UserName == current.UserName) || !a.TargetsUser.Any())
      .ToList();

    var WorkHours = _context.WorkHours
      .Where(a => a.UserID == current.Id && a.Date <= lastDay && firstDay <= a.Date)
      .Include(a => a.WorkLocation)
      .Include(a => a.Chords)
      .ToList();


    return new CalendarResponse()
    {
      dayOffDates = DayOffDates,
      dayOffExpressions = DayOffExpression,
      workHours = WorkHours
    };
  }
}