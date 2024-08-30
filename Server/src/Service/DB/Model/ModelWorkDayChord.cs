class ModelWorkDayChord
{
  [Required]
  public required string ChordID { get; set; }
  [Required]
  public required string UserID { get; set; }
  [Required]
  public required DateOnly Date { get; set; }
  [Required]
  public required long Count { get; set; }

  public virtual ModelChord? Chord { get; set; }
  public virtual ModelWorkDay? WorkDay { get; set; }

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkDayChord>()
      .HasOne(x => x.Chord)
      .WithMany(x => x.WorkDayChords)
      .HasForeignKey(x => x.ChordID);

    builder.Entity<ModelWorkDayChord>()
      .HasOne(x => x.WorkDay)
      .WithMany(x => x.WorkDayChords)
      .HasForeignKey(x => new { x.UserID, x.Date });

    builder.Entity<ModelWorkDayChord>()
      .HasKey(x => new { x.ChordID, x.UserID, x.Date });

    builder.Entity<ModelWorkDayChord>()
      .HasData(StorageWorkDayChord.WorkDayChords);
  }
}