namespace Wasko;

public class ModelDayOffExpression
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  public required string Reason { get; set; }
  [Required]
  public required bool Off { get; set; }

  [Range(2000, 2100)]
  public short? Year { get; set; }
  public EnumMonth? Month { get; set; }
  [Range(0, 30)]
  public byte? Day { get; set; }
  public EnumDayOfWeek? DayOfWeek { get; set; }
  public short? DaysAfterEaster { get; set; }
  [Required]
  public byte Order { get; set; } = 128;
  public DateOnly? StopActive { get; set; }

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