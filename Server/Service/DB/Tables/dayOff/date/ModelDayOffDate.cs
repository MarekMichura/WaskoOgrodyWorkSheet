namespace Wasko;

public class ModelDayOffDate : ModelDayOff {
  [Required]
  [DataType(DataType.Date)]
  public required DateOnly StartDate { get; set; }
  [DataType(DataType.Date)]
  public DateOnly? EndDate { get; set; }
}