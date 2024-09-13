class ModelWorkDay
{
  [Required]
  public required string UserID { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public required DateOnly Date { get; set; }
  [Required]
  public required string ConstructionID { get; set; }
  [Required]
  [DataType(DataType.Time)]
  public required TimeOnly StartTime { get; set; }
  [Required]
  [DataType(DataType.Time)]
  public required TimeOnly EndTime { get; set; }

  public virtual ModelUser? User { get; set; }
  public virtual ModelConstruction? Construction { get; set; }
  public virtual IEnumerable<ModelWorkDayChord> WorkDayChords { get; set; } = [];

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkDay>()
     .HasOne(x => x.User)
     .WithMany(x => x.WorkDays)
     .HasForeignKey(x => x.UserID);

    builder.Entity<ModelWorkDay>()
      .HasOne(x => x.Construction)
      .WithMany(x => x.WorkDays)
      .HasForeignKey(x => x.ConstructionID);

    builder.Entity<ModelWorkDay>()
     .HasKey(x => new { x.UserID, x.Date });

    builder.Entity<ModelWorkDay>()
      .HasData(StorageWorkDay.WorkDays);
  }
}