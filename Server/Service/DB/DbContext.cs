namespace Wasko;

public class DataBaseContext(DbContextOptions<DataBaseContext> options) : IdentityDbContext<ModelUser, ModelRole, string>(options) {
  public required DbSet<ModelBonus> Bonus { get; set; }
  public required DbSet<ModelFound> Founds { get; set; }

  // =============================================================
  public required DbSet<ModelDayOffDate> DayOffDates { get; set; }
  public required DbSet<ModelDayOffDateTargetRole> DayOffDatesTargetUser { get; set; }
  public required DbSet<ModelDayOffDateTargetUser> DayOffDatesTargetRole { get; set; }

  // =============================================================
  public required DbSet<ModelDayOffExpression> DayOffExpression { get; set; }
  public required DbSet<ModelDayOffExpressionTargetRole> DayOffExpressionTargetUser { get; set; }
  public required DbSet<ModelDayOffExpressionTargetUser> DayOffExpressionTargetRole { get; set; }

  // =============================================================
  public required DbSet<ModelWorkHours> WorkHours { get; set; }
  public required DbSet<ModelWorkLocation> WorkLocations { get; set; }
  public required DbSet<ModelWorkLocationRole> WorkLocationRoles { get; set; }
  public required DbSet<ModelWorkLocationTargetRole> WorkLocationTargetRoles { get; set; }

  // =============================================================
  public required DbSet<ModelChord> Chords { get; set; }
  public required DbSet<ModelChordPrice> ChordPrices { get; set; }

  // =============================================================
  public required DbSet<ModelLastActualization> LastActualizations { get; set; }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);
    builder.DefineModels();
  }
}
