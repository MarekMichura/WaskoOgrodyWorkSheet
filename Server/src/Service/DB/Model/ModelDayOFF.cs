class ModelDayOff
{
  [Key]
  public required string ID { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public required DateOnly Date { get; set; }
  [Required]
  public required string Reason { get; set; }
  [Required]
  public required bool Off { get; set; } = true;

  public virtual ModelUser? User { get; set; }

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOff>()
      .HasOne(a => a.User)
      .WithMany(a => a.DaysOff);

    builder.Entity<ModelDayOff>()
      .HasData(StorageDayOff.DaysOff);
  }
}