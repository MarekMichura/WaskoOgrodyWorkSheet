namespace Wasko;

partial class ServiceCalendar(DatabaseContext context, IServiceUser user) : IServiceCalendar
{
  readonly DatabaseContext _context = context;
  readonly IServiceUser _user = user;

  public CalendarResponse GetData(DateOnly start, DateOnly end)
  {
    var current = _user.GetCurrentUser() ?? throw new NullReferenceException();

    var DayOffDates = _context.DayOffDates
      .Where(dayOff => dayOff.StartDate <= end && start <= dayOff.EndDate && (dayOff.StopActive == null || dayOff.StopActive > start))
      .Include(dayOff => dayOff.TargetsRole)
      .Where(dayOff => dayOff.TargetsRole.Any(role => current.Roles.Contains(role)) || dayOff.TargetsRole.Count == 0)
      .Include(dayOff => dayOff.TargetsUser)
      .Where(dayOff => dayOff.TargetsUser.Any(user => user.UserName == current.UserName) || dayOff.TargetsUser.Count == 0)
      .ToList();

    var DayOffExpression = _context.DayOffExpression
      .Where(dayOff => dayOff.StopActive == null || dayOff.StopActive > start)
      .Include(dayOff => dayOff.TargetsRole)
      .Where(dayOff => dayOff.TargetsRole.Any(role => current.Roles.Contains(role)) || dayOff.TargetsRole.Count == 0)
      .Include(dayOff => dayOff.TargetsUser)
      .Where(dayOff => dayOff.TargetsUser.Any(user => user.UserName == current.UserName) || dayOff.TargetsUser.Count == 0)
      .ToList();

    var WorkHours = _context.WorkHours
      .Where(workHours => workHours.UserID == current.Id && workHours.Date <= end && start <= workHours.Date && workHours.Active)
      .Include(workHours => workHours.WorkLocation)
      .Include(workHours => workHours.Chords)
      .ToList();

    return new CalendarResponse()
    {
      DayOffDates = DayOffDates,
      DayOffExpressions = DayOffExpression,
      WorkHours = WorkHours
    };
  }
}