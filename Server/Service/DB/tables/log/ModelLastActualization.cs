namespace Wasko;

class ModelLastActualization
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  [StringLength(100)]
  public required string TableName { get; set; }
  [Required]
  public required DateTime LastUpdated { get; set; }
}