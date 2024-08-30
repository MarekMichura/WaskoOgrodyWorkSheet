class ModelConstruction
{
  [Key]
  public required string ID { get; set; }
  [Required]
  [StringLength(50)]
  public required string Name { get; set; }
  [Required]
  public required bool Active { get; set; } = true;

  public virtual IEnumerable<ModelWorkDay> WorkDays { get; set; } = [];

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelConstruction>()
      .HasData(StorageConstruction.Constructions);
  }
}