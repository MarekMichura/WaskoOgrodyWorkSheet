class ModelCashType
{
  [Key]
  [Required]
  public required string ID { get; set; }
  [Required]
  public required string Type { get; set; }

  public IEnumerable<ModelCash> Cashes { get; set; } = [];

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelCashType>()
      .HasData(StorageCash.CashTypes);
  }
}

class ModelCash
{
  [Key]
  [Required]
  public required string ID { get; set; }
  [Required]
  public required string UserID { get; set; }
  [Required]
  public required string CashTypeID { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public DateOnly Date { get; set; }
  [Required]
  [DataType(DataType.Currency)]
  [Column(TypeName = "decimal(18, 2)")]
  public decimal Cash { get; set; }

  public virtual ModelUser? User { get; set; }
  public virtual ModelCashType? CashType { get; set; }

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelCash>()
      .HasOne(x => x.User)
      .WithMany(x => x.Cashes)
      .HasForeignKey(x => x.UserID);

    builder.Entity<ModelCash>()
      .HasOne(x => x.CashType)
      .WithMany(x => x.Cashes)
      .HasForeignKey(x => x.CashTypeID);

    builder.Entity<ModelCash>()
      .HasData(StorageCash.Cashes);
  }
}