namespace Wasko;

public class ModelChordPrice
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  public DateOnly Date { get; set; } = DateOnly.FromDateTime(DateTime.Now);
  [Required]
  public required decimal Price { get; set; }

  [StringLength(36)]
  public required string ChordID { get; set; }
  public virtual ModelChord? Chord { get; set; }

  [StringLength(36)]
  public required string CreatorID { get; set; }
  public virtual ModelUser? Creator { get; set; }
}