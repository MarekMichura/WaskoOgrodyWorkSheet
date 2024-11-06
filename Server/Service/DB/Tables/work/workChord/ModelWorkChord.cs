namespace Wasko;

public class ModelWorkChord {
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  public required long Quantity { get; set; }
  [Required]
  public DateTime Date { get; set; } = DateTime.Now;
  [Required]
  public bool Active { get; set; } = true;

  [Required]
  [StringLength(36)]
  public required string ChordID { get; set; }
  public virtual ModelChord? Chord { get; set; }

  [Required]
  [StringLength(36)]
  public required string WorkHourID { get; set; }
  public ModelWorkHours? WorkHour { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public ModelUser? Author { get; set; }
}