
public interface IRep
{
  IQueryable<ModelUser> Users { get; }
  IQueryable<ModelChord> Chords { get; }
  IQueryable<ModelConstruction> Constructions { get; }
  IQueryable<ModelWorkDay> WorkDays { get; }
  IQueryable<ModelWorkDayChord> WorkDayChords { get; }
  IQueryable<ModelDaysOff> DaysOffs { get; }
}

public class Rep : IRep
{
  private readonly DataBaseConnect context;

  public IQueryable<ModelUser> Users => context.Users;
  public IQueryable<ModelChord> Chords => context.Chords;
  public IQueryable<ModelConstruction> Constructions => context.Constructions;
  public IQueryable<ModelWorkDay> WorkDays => context.workDays;
  public IQueryable<ModelWorkDayChord> WorkDayChords => context.WorkDayChords;
  public IQueryable<ModelDaysOff> DaysOffs => context.DaysOffs;

  public Rep(DataBaseConnect context)
  {
    this.context = context;
  }
}