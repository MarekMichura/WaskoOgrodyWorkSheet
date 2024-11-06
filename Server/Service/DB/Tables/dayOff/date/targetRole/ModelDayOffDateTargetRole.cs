namespace Wasko;

public class ModelDayOffDateTargetRole {
  [Required]
  [StringLength(36)]
  public required string TargetID { get; set; }
  public virtual ModelRole? Target { get; set; }

  [Required]
  [StringLength(36)]
  public required string DayOffID { get; set; }
  public virtual ModelDayOffDate? DayOff { get; set; }
}