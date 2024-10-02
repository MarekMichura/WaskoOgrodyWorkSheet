using System.Runtime.Serialization;

namespace Wasko;

class ModelWorkHour
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
  public required TimeOnly WorkStart { get; set; }
  [Required]
  [DataType(DataType.Time)]
  public required TimeOnly WorkEnd { get; set; }
  [Required]
  public bool Active { get; set; } = true;

  [Required]
  [StringLength(36)]
  public required string WorkLocationID { get; set; }
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

  [IgnoreDataMember]
  public virtual IEnumerable<ModelDayOffDate> DaysOffDate => User is not null
    ? User.DaysOffDate.Union(User.Roles.SelectMany(a => a.DaysOffDates))
    : [];

  [IgnoreDataMember]
  public virtual IEnumerable<ModelDayOffExpression> DaysOffExpression => User is not null
    ? User.DaysOffExpression.Union(User.Roles.SelectMany(a => a.DaysOffExpressions))
    : [];
}