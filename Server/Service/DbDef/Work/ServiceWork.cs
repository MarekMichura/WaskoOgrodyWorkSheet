namespace Wasko;

partial class ServiceWork(DatabaseContext context, IServiceUser user) : IServiceWork
{
  readonly DatabaseContext _context = context;
  readonly IServiceUser _user = user;

  public IEnumerable<ModelWorkHours>? AddOrChangeWorkHours(DateOnly date, IEnumerable<ModelInputWorkHours.WorkHours> hours)
  {
    var current = _user.GetCurrentUser() ?? throw new NullReferenceException();

    var workHoursBefore = _context.WorkHours
      .Where(workHours => workHours.Date == date && workHours.UserID == current.Id && workHours.Active && workHours.Chords.Count() != 0)
      .Include(workHours => workHours.Chords)
      .ToList();

    workHoursBefore.ForEach(workHours => workHours.Active = false);
    var newHours = new List<ModelWorkHours>();
    foreach (var hour in hours)
    {
      newHours.Add(new ModelWorkHours()
      {
        ID = Guid.NewGuid().ToString(),
        AuthorID = current.Id,
        UserID = current.Id,
        WorkLocationID = hour.WorkLocationID,
        WorkStart = hour.WorkStart,
        WorkEnd = hour.WorkEnd,
        Date = date,
      });
    }

    _context.WorkHours.AddRange(newHours);
    _context.SaveChanges();
    return workHoursBefore;
  }

  public IEnumerable<ModelWorkLocation> GetWorkLocations()
  {
    var current = _user.GetCurrentUser() ?? throw new NullReferenceException();

    var result = _context.WorkLocations
      .Where(workLocation => workLocation.Active)
      .Include(workLocation => workLocation.Targets)
      .Where(workLocation => workLocation.Targets
        .Any(role => current.Roles.Select(role => role.Id).Contains(role.Id))
        || workLocation.Targets.Count == 0)
      .ToList();

    return result;
  }
}