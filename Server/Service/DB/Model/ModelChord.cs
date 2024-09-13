class ModelChord
{
  [Key]
  [Required]
  public required string ID { get; set; }
  [Required]
  [StringLength(50)]
  public required string Name { get; set; }
  [Required]
  [DataType(DataType.Currency)]
  [Column(TypeName = "decimal(18, 2)")]
  public required decimal Price { get; set; }
  [DataType(DataType.Upload)]
  public byte[]? ChordImage { get; set; }
  [Required]
  public required bool Active { get; set; }

  public virtual IEnumerable<ModelWorkDayChord> WorkDayChords { get; set; } = [];

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChord>()
      .HasData(StorageChord.Chords);
  }
}