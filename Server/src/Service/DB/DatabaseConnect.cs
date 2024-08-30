class DatabaseContext : IdentityDbContext<ModelUser, ModelRole, string>
{
  public DbSet<ModelCash> Cashes { get; set; }
  public DbSet<ModelCashType> CashTypes { get; set; }
  public DbSet<ModelChord> Chords { get; set; }
  public DbSet<ModelConstruction> Constructions { get; set; }
  public DbSet<ModelDayOff> DaysOff { get; set; }
  public DbSet<ModelProfil> Profiles { get; set; }
  public DbSet<ModelWorkDay> WorkDays { get; set; }
  public DbSet<ModelWorkDayChord> WorkDayChords { get; set; }

  public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);

    ModelUser.CreateModel(builder);
    ModelCash.CreateModel(builder);
    ModelCashType.CreateModel(builder);
    ModelChord.CreateModel(builder);
    ModelConstruction.CreateModel(builder);
    ModelDayOff.CreateModel(builder);
    ModelProfil.CreateModel(builder);
    ModelWorkDay.CreateModel(builder);
    ModelWorkDayChord.CreateModel(builder);
  }
}