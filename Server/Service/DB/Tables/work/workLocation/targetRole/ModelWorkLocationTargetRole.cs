namespace Wasko;

public class ModelWorkLocationTargetRole
{
  [Required]
  [StringLength(36)]
  public required string WorkLocationID { get; set; }
  public virtual ModelWorkLocation? WorkLocation { get; set; }

  [Required]
  [StringLength(36)]
  public required string RoleID { get; set; }
  public virtual ModelRole? Role { get; set; }
}