public struct ModelMonthlyWork
{
  public required IEnumerable<DateOnly> WorkDays { get; set; }
  public required IEnumerable<DateOnly> DaysOff { get; set; }
}

public interface ICalendarRep
{
  public ModelMonthlyWork getMonthlyWork(DateOnly start, DateOnly end, ModelUser user);
  public void SetTime(DateOnly date, TimeOnly start, TimeOnly end, ModelUser user);
}

public class CalendarRep : ICalendarRep
{
  private DataBaseConnect rep { get; set; }
  public CalendarRep(DataBaseConnect rep)
  {
    this.rep = rep;
  }

  public ModelMonthlyWork getMonthlyWork(DateOnly start, DateOnly end, ModelUser user)
  {
    var workDays = rep.workDays
      .Where(a => a.UserID == user.Id)
      .Select(a => a.Date)
      .ToArray();

    var freeDays = rep.DaysOffs
      .Where(a => a.Date >= start && a.Date <= end)
      .Select(a => a.Date)
      .ToArray();

    Console.WriteLine($"start: {start.Year} {start.Month} {start.Day}");
    Console.WriteLine($"end: {end.Year} {end.Month} {end.Day}");

    return new ModelMonthlyWork()
    {
      DaysOff = freeDays,
      WorkDays = workDays
    };
  }

  public void SetTime(DateOnly date, TimeOnly start, TimeOnly end, ModelUser user)
  {
    var day = rep.workDays.Where(a => a.UserID == user.Id && a.Date == date).FirstOrDefault();
    if (day is null)
    {
      day = new ModelWorkDay()
      {
        UserID = user.Id,
        Date = date,
        ConstructionID = "06aed911-d60d-40a9-b61b-ad6fbb734444",
        StartTime = start,
        EndTime = end
      };

      rep.Add(day);
      rep.SaveChanges();
      return;
    }
    day.StartTime = start;
    day.EndTime = end;

    rep.workDays.Update(day);
    rep.SaveChanges();
  }
}

