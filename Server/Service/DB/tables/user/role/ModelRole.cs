namespace Wasko;

class ModelRole : IdentityRole
{
  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public ModelUser? Author { get; set; }
  public required ushort TitleStrength { get; set; }

  public virtual ICollection<ModelUser> Users { get; set; } = [];
  public virtual ICollection<ModelWorkLocation> WorkLocations { get; set; } = [];

  public virtual ICollection<ModelDayOffDate> DaysOffDates { get; set; } = [];
  public virtual ICollection<ModelDayOffExpression> DaysOffExpressions { get; set; } = [];
}