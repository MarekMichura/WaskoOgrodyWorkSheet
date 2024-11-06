namespace Wasko;

public class ModelDayOff {
  [Key]
  [Required]
  [StringLength(36)]
  public required string ID { get; set; }
  [Required]
  public required string Reason { get; set; }
  [Required]
  public required bool Off { get; set; }
  [Required]
  public byte Order { get; set; }
  public DateOnly? StopActive { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public virtual ModelUser? Author { get; set; }

  [StringLength(36)]
  public string? ApproverID { get; set; }
  public ModelUser? Approver { get; set; }

  public virtual ICollection<ModelUser> TargetsUser { get; set; } = [];
  public virtual ICollection<ModelRole> TargetsRole { get; set; } = [];
}