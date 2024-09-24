namespace Wasko;

class ModelWorkLocationRole
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  [StringLength(100)]
  public required string Name { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public virtual ModelUser? Author { get; set; }

  public virtual ICollection<ModelWorkLocation> Locations { get; set; } = [];
}