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
  public required TimeOnly WorkStart { get; set; } = new TimeOnly(0, 0);
  [Required]
  [DataType(DataType.Time)]
  public required TimeOnly WorkEnd { get; set; } = new TimeOnly(0, 0);
  [Required]
  public bool Active { get; set; } = true;

  [Required]
  [StringLength(36)]
  public required string WorkLocationID { get; set; } = StorageWorkLocations.NotSet;
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

  public IEnumerable<ModelDayOffDate> DayOffDate(IEnumerable<ModelDayOffDate> Empty) => User is null ? [] :
    User.DaysOffDate.Union(User.Roles.SelectMany(a => a.DaysOffDates)).Union(Empty)
      .Where(a => a.StartDate == Date || (a.EndDate is not null && a.StartDate > Date && a.EndDate <= Date));

  public IEnumerable<ModelDayOffExpression> DayOffExpression(IEnumerable<ModelDayOffExpression> Empty) => User is null ? [] :
    User.DaysOffExpression.Union(User.Roles.SelectMany(a => a.DaysOffExpressions)).Union(Empty)
      .Where(a =>
      {
        bool year = a.Year is null || a.Year == Date.Year;
        bool month = a.Month is null || (int)a.Month == Date.Month;
        bool day = a.Day is null || a.Day == Date.Day;
        bool week = a.DayOfWeek is null || (int)a.DayOfWeek == (int)Date.DayOfWeek;
        bool eastern = a.DaysAfterEaster is null || a.DaysAfterEaster == Easter.DaysAfterEaster(Date);
        return year && month && day && week && eastern;
      });
}
