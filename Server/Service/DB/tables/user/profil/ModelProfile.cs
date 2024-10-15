namespace Wasko;

public class ModelProfil
{
  [Required]
  [StringLength(36)]
  [Key, ForeignKey("ModelUser")]
  public string ID { get; set; } = string.Empty;
  [Required]
  [StringLength(100)]
  public required string FirstName { get; set; }
  [Required]
  [StringLength(100)]
  public required string LastName { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public required DateOnly WorkStartDate { get; set; } = DateOnly.FromDateTime(DateTime.Now);
  [DataType(DataType.Upload)]
  public byte[]? ProfileImage { get; set; } = [];

  public virtual ModelUser? User { get; set; }
}