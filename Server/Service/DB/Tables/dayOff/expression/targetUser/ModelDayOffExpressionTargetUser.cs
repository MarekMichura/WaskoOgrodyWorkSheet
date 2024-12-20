namespace Wasko;

public class ModelDayOffExpressionTargetUser {
  [Required]
  [StringLength(36)]
  public required string TargetID { get; set; }
  public virtual ModelUser? Target { get; set; }

  [Required]
  [StringLength(36)]
  public required string DayOffID { get; set; }
  public virtual ModelDayOffExpression? DayOff { get; set; }
}