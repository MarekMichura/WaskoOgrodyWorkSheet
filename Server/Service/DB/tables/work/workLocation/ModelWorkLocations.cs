namespace Wasko;

class ModelWorkLocation
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  [StringLength(100)]
  public required string Name { get; set; }
  [Required]
  public bool Active { get; set; } = true;

  public virtual ICollection<ModelRole> Targets { get; set; } = [];
  public virtual ICollection<ModelWorkHour> WorkHours { get; set; } = [];
  public virtual ICollection<ModelWorkLocationRole> Roles { get; set; } = [];
}