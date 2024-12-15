namespace Wasko;

public class ModelWorkChord {
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;

  [Required]
  public required long Quantity { get; set; }

  [Required]
  [DataType(DataType.Date)]
  public required DateOnly Date { get; set; }

  [Required]
  public bool Active { get; set; } = true;

  [Required]
  [DataType(DataType.DateTime)]
  public DateTime AddDate { get; set; } = DateTime.Now;

  [Required]
  [StringLength(36)]
  public required string ChordID { get; set; }
  public virtual ModelChord? Chord { get; set; }

  [Required]
  [StringLength(36)]
  public required string WorkLocationID { get; set; }
  public ModelWorkLocation? WorkLocation { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public ModelUser? Author { get; set; }
}
