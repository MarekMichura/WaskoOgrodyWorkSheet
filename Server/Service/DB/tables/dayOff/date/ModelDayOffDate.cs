namespace Wasko;

class ModelDayOffDate
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  [StringLength(100)]
  public required string Reason { get; set; }
  [Required]
  public required bool Off { get; set; }
  public DateOnly? StopActive { get; set; }
  [Required]
  public byte Order { get; set; } = 128;

  [Required]
  [DataType(DataType.Date)]
  public required DateOnly StartDate { get; set; }
  [DataType(DataType.Date)]
  public DateOnly? EndDate { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public virtual ModelUser? Author { get; set; }

  [StringLength(36)]
  public string? ApproverID { get; set; }
  public virtual ModelUser? Approver { get; set; }

  public virtual ICollection<ModelUser> TargetsUser { get; set; } = [];
  public virtual ICollection<ModelRole> TargetsRole { get; set; } = [];
}