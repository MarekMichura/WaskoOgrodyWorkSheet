namespace Wasko;

public class DatabaseContext(DbContextOptions<DatabaseContext> options) : IdentityDbContext<ModelUser, ModelRole, string>(options)
{
  // =============================================================
  public DbSet<ModelBonus> Bonus { get; set; }
  public DbSet<ModelFound> Founds { get; set; }

  // =============================================================
  public DbSet<ModelDayOffDate> DayOffDates { get; set; }
  public DbSet<ModelDayOffDateTargetRole> DayOffDatesTargetUser { get; set; }
  public DbSet<ModelDayOffDateTargetUser> DayOffDatesTargetRole { get; set; }

  // =============================================================
  public DbSet<ModelDayOffExpression> DayOffExpression { get; set; }
  public DbSet<ModelDayOffExpressionTargetRole> DayOffExpressionTargetUser { get; set; }
  public DbSet<ModelDayOffExpressionTargetUser> DayOffExpressionTargetRole { get; set; }

  // =============================================================
  public DbSet<ModelWorkHour> WorkHours { get; set; }
  public DbSet<ModelWorkLocation> WorkLocations { get; set; }
  public DbSet<ModelWorkLocationRole> WorkLocationRoles { get; set; }
  public DbSet<ModelWorkLocationTargetRole> WorkLocationTargetRoles { get; set; }

  // =============================================================
  public DbSet<ModelChord> Chords { get; set; }
  public DbSet<ModelChordPrice> ChordPrices { get; set; }

  // =============================================================
  public DbSet<ModelLastActualization> LastActualizations { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // optionsBuilder.AddInterceptors(new UpdateLastActualization());
    base.OnConfiguring(optionsBuilder);
  }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);
    builder.CreateModels();
  }
}