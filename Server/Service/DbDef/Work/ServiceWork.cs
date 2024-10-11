
namespace Wasko;

partial class ServiceWork(DatabaseContext context, IServiceUser user) : IServiceWork
{
  DatabaseContext _context = context;
  IServiceUser _user = user;

  public IEnumerable<ModelWorkHour>? AddOrChangeWorkHours(DateOnly date, IEnumerable<ModelInputWorkHours.WorkHours> hours)
  {
    var current = _user.GetCurrentUser() ?? throw new NullReferenceException();

    var workHoursBefore = _context.WorkHours
      .Where(a => a.Date == date && a.UserID == current.Id && a.Active && a.Chords.Count() != 0)
      .Include(a => a.Chords)
      .ToList();

    workHoursBefore.ForEach(a => a.Active = false);
    var newHours = new List<ModelWorkHour>();
    foreach (var hour in hours)
    {
      newHours.Add(new ModelWorkHour()
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
      .Where(a => a.Active)
      .Include(a => a.Targets)
      .Where(a => a.Targets.Any(a => current.Roles.Select(a => a.Id).Contains(a.Id)) || a.Targets.Count == 0)
      .ToList();

    return result;
  }
}