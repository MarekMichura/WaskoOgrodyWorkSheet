using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public interface IAdminRep
{
  public List<ModelUser> getMonthlyWork(DateOnly start, DateOnly end);
}

public class AdminRep : IAdminRep
{
  private IRep rep { get; set; }
  public AdminRep(IRep rep)
  {
    this.rep = rep;
  }

  public List<ModelUser> getMonthlyWork(DateOnly start, DateOnly end)
  {
    var workDays = rep.Users
      .Include(a => a.WorkDays.Where(b => b.Date >= start && b.Date <= end)).ThenInclude(b => b.WorkDayChords)
      .Include(a => a.WorkDays.Where(b => b.Date >= start && b.Date <= end)).ThenInclude(b => b.Construction)
      .ToList();

    return workDays;
  }
}

