namespace Wasko;

public class ModelBonus {
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  [DataType(DataType.Currency)]
  public required decimal Bonus { get; set; }
  [Required]
  [StringLength(100)]
  public required string BonusDescription { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public DateOnly Date { get; set; } = DateOnly.FromDateTime(DateTime.Now);

  [Required]
  [StringLength(36)]
  public required string CreatorID { get; set; }
  public virtual ModelUser? Creator { get; set; }

  [Required]
  [StringLength(36)]
  public required string TargetID { get; set; }
  public virtual ModelUser? Target { get; set; }

  [StringLength(36)]
  public string? ApproverID { get; set; }
  public virtual ModelUser? Approver { get; set; }
  [StringLength(100)]
  public string? BonusRejectionReason { get; set; }
}