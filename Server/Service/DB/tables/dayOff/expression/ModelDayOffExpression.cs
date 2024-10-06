using System.Text.Json.Serialization;

namespace Wasko;

class ModelDayOffExpression
{
  [Key]
  [Required]
  [StringLength(36)]
  public string ID { get; set; } = string.Empty;
  [Required]
  public required string Reason { get; set; }
  [Required]
  public required bool Off { get; set; }

  [Range(2000, 2100)]
  public short? Year { get; set; }
  public EnumMonth? Month { get; set; }
  [Range(0, 30)]
  public byte? Day { get; set; }
  public EnumDayOfWeek? DayOfWeek { get; set; }
  public short? DaysAfterEaster { get; set; }
  [Required]
  public byte Order { get; set; } = 128;
  public DateOnly? StopActive { get; set; }

  [Required]
  [StringLength(36)]
  public required string AuthorID { get; set; }
  public virtual ModelUser? Author { get; set; }

  [StringLength(36)]
  public string? ApproverID { get; set; }
  public virtual ModelUser? Approver { get; set; }

  public virtual ICollection<ModelUser> TargetsUser { get; set; } = [];
  public virtual ICollection<ModelRole> TargetsRole { get; set; } = [];

  public List<DateOnly> convertToDate(int year, EnumMonth month, bool rangeMonth = true)
  {
    var result = new List<DateOnly>();
    var start = new DateOnly(year, (int)month, 1);
    var end = rangeMonth ? start.AddMonths(1) : start;

    DateOnly? eastern = DaysAfterEaster is null ? null :
      Easter.DateAfterEastern((int)DaysAfterEaster, year);

    for (var date = start; date < end; date = date.AddDays(1))
    {
      if ((Day is not null && date.Day != Day) ||
          (DayOfWeek is not null && (int)date.DayOfWeek != (int)DayOfWeek) ||
          (Month is not null && date.Month != (int)Month) ||
          (Year is not null && date.Year != Year) ||
          (eastern is not null && eastern != date))
        continue;

      result.Add(date);
    }

    return result;
  }
}