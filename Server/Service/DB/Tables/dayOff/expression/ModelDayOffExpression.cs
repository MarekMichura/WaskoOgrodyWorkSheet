namespace Wasko;

public class ModelDayOffExpression : ModelDayOff {
  [Range(2000, 2100)]
  public short? Year { get; set; }
  public EnumMonth? Month { get; set; }
  [Range(0, 30)]
  public byte? Day { get; set; }
  public EnumDayOfWeek? DayOfWeek { get; set; }
  public short? DaysAfterEaster { get; set; }
}