namespace Wasko;

public class ModelWorkHour
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  [DataType(DataType.DateTime)]
  public DateTime AddDate { get; set; } = DateTime.Now;
  [Required]
  [DataType(DataType.Date)]
  public required DateOnly Date { get; set; }
  [Required]
  [DataType(DataType.Time)]
  public required TimeOnly WorkStart { get; set; } = new TimeOnly(0, 0);
  [Required]
  [DataType(DataType.Time)]
  public required TimeOnly WorkEnd { get; set; } = new TimeOnly(0, 0);
  [Required]
  public bool Active { get; set; } = true;

  [Required]
  [StringLength(36)]
  public required string WorkLocationID { get; set; } = StorageWorkLocations.NotSet;
  public virtual ModelWorkLocation? WorkLocation { get; set; }

  [Required]
  [StringLength(36)]
  public required string UserID { get; set; }
  public virtual ModelUser? User { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public virtual ModelUser? Author { get; set; }

  public virtual ICollection<ModelWorkChord> Chords { get; set; } = [];
}
