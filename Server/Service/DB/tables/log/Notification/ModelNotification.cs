namespace Wasko;

public class ModelNotification
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  public required short TemplateName { get; set; }
  [Required]
  public required string Content { get; set; }
  [Required]
  public required string TargetID { get; set; }
  public virtual ModelUser? Target { get; set; }
}