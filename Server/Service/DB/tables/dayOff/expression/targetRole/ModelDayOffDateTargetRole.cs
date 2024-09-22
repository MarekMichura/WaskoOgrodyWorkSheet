class ModelDayOffExpressionTargetRole
{
  [Required]
  [StringLength(36)]
  public required string TargetID { get; set; }
  public virtual ModelRole? Target { get; set; }

  [Required]
  [StringLength(36)]
  public required string DayOffID { get; set; }
  public virtual ModelDayOffExpression? DayOff { get; set; }
}