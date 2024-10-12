namespace Wasko;

partial class ServiceCalendar(DatabaseContext context, IServiceUser user) : IServiceCalendar
{
  readonly DatabaseContext _context = context;
  readonly IServiceUser _user = user;

  public CalendarResponse GetData(DateOnly start, DateOnly end)
  {
    var current = _user.GetCurrentUser() ?? throw new NullReferenceException();

    var DayOffDates = _context.DayOffDates
      .Where(a => a.StartDate <= end && start <= a.EndDate && (a.StopActive == null || a.StopActive > start))
      .Include(a => a.TargetsRole)
      .Where(a => a.TargetsRole.Any(b => current.Roles.Contains(b)) || a.TargetsRole.Count == 0)
      .Include(a => a.TargetsUser)
      .Where(a => a.TargetsUser.Any(b => b.UserName == current.UserName) || a.TargetsUser.Count == 0)
      .ToList();

    var DayOffExpression = _context.DayOffExpression
      .Where(a => a.StopActive == null || a.StopActive > start)
      .Include(a => a.TargetsRole)
      .Where(a => a.TargetsRole.Any(b => current.Roles.Contains(b)) || a.TargetsRole.Count == 0)
      .Include(a => a.TargetsUser)
      .Where(a => a.TargetsUser.Any(b => b.UserName == current.UserName) || a.TargetsUser.Count == 0)
      .ToList();

    var WorkHours = _context.WorkHours
      .Where(a => a.UserID == current.Id && a.Date <= end && start <= a.Date && a.Active)
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