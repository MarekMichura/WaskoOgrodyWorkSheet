namespace Wasko;

public class ModelUserSalary
{
  [Required]
  [DataType(DataType.Date)]
  public DateOnly Date { get; set; } = DateOnly.FromDateTime(DateTime.Now);
  [Required]
  [DataType(DataType.Currency)]
  public required decimal HourlySalary { get; set; }


  [Required]
  [StringLength(36)]
  public required string ID { get; set; }
  public virtual ModelUser? User { get; set; }

  [StringLength(36)]
  public string? ApproverID { get; set; }
  public virtual ModelUser? Approver { get; set; }
}