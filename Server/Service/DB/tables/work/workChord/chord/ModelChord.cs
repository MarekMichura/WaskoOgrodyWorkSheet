namespace Wasko;

class ModelChord
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

  [StringLength(36)]
  public required string CreatorID { get; set; }
  public virtual ModelUser? Creator { get; set; }

  public virtual ICollection<ModelWorkChord> WorkChords { get; set; } = [];
  public virtual ICollection<ModelChordPrice> Prices { get; set; } = [];
  public virtual ModelChordPrice? CurrentPrice => Prices
    .Where(a => a.Date < DateOnly.FromDateTime(DateTime.Now))
    .MaxBy(a => a.Date);
}