using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class DataBaseConnect : IdentityDbContext<ModelUser>
{
  public DbSet<ModelChord> Chords { get; set; }
  public DbSet<ModelWorkDay> workDays { get; set; }
  public DbSet<ModelConstruction> Constructions { get; set; }
  public DbSet<ModelWorkDayChord> WorkDayChords { get; set; }
  public DbSet<ModelDaysOff> DaysOffs { get; set; }

  public DataBaseConnect(DbContextOptions<DataBaseConnect> options) : base(options) { }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);

    ModelUser.ModelCreate(builder);
    ModelChord.ModelCreate(builder);
    ModelWorkDay.ModelCreate(builder);
    ModelConstruction.ModelCreate(builder);
    ModelWorkDayChord.ModelCreate(builder);
    ModelDaysOff.ModelCreate(builder);
  }
}
