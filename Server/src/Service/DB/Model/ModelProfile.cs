class ModelProfil
{
  [Key]
  [Required]
  public string ID { get; set; } = string.Empty;
  [Required]
  [StringLength(50)]
  public string FirstName { get; set; } = string.Empty;
  [Required]
  [StringLength(50)]
  public string LastName { get; set; } = string.Empty;
  [Required]
  [DataType(DataType.Date)]
  public DateOnly WorkStartDate { get; set; } = DateOnly.FromDateTime(DateTime.Now);
  [DataType(DataType.Upload)]
  public byte[]? ProfileImage { get; set; } = [];

  public virtual ModelUser? User { get; set; }

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelProfil>()
      .Property(a => a.WorkStartDate)
      .HasColumnType("Date")
      .HasDefaultValueSql("getdate()")
      .IsRequired();

    builder.Entity<ModelProfil>()
      .HasOne(a => a.User)
      .WithOne(a => a.Profil)
      .HasForeignKey<ModelProfil>(a => a.ID)
      .IsRequired();

    builder.Entity<ModelProfil>()
      .HasData(StorageProfil.Profiles);
  }
}