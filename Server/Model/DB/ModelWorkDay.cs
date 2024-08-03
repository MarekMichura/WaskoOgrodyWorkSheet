using System.ComponentModel.DataAnnotations;
using System.Data;
using Microsoft.EntityFrameworkCore;

public class ModelWorkDay
{
  [Required]
  public required string UserID { get; set; }
  [Required]
  public ModelUser? User { get; set; }
  [Required]
  public required string ConstructionID { get; set; }
  [Required]
  public ModelConstruction? Construction { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public DateOnly Date { get; set; }
  [Required]
  [DataType(DataType.Time)]
  public TimeOnly StartTime { get; set; }
  [Required]
  [DataType(DataType.Time)]
  public TimeOnly EndTime { get; set; }

  [DataType(DataType.Currency)]
  public decimal CashRegister { get; set; }
  [DataType(DataType.Currency)]
  public decimal Advance { get; set; }
  [DataType(DataType.Currency)]
  public decimal Bonus { get; set; }

  public IEnumerable<ModelWorkDayChord> WorkDayChords { get; set; } = new List<ModelWorkDayChord>();

  public static void ModelCreate(ModelBuilder builder)
  {
    builder.Entity<ModelWorkDay>()
      .HasOne(x => x.User)
      .WithMany(x => x.WorkDays)
      .HasForeignKey(x => x.UserID);

    builder.Entity<ModelWorkDay>()
      .HasOne(x => x.Construction)
      .WithMany(x => x.WorkDays)
      .HasForeignKey(x => x.ConstructionID);

    builder.Entity<ModelWorkDay>()
      .HasKey(x => new
      {
        x.UserID,
        x.Date
      });

    builder.Entity<ModelWorkDay>()
      .HasData(WorkDays);
  }

  internal static IReadOnlyList<ModelWorkDay> WorkDays = [
    new () {UserID = ModelUser.DefaultUserData[2].Id, ConstructionID = ModelConstruction.Constructions[0].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(1,0,0,0,0)), StartTime = new (8,0,0), EndTime = new (16,0,0)},
    new () {UserID = ModelUser.DefaultUserData[2].Id, ConstructionID = ModelConstruction.Constructions[1].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(2,0,0,0,0)), StartTime = new (9,0,0), EndTime = new (20,0,0)},
    new () {UserID = ModelUser.DefaultUserData[2].Id, ConstructionID = ModelConstruction.Constructions[1].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(3,0,0,0,0)), StartTime = new (10,0,0), EndTime = new (22,0,0)},
    new () {UserID = ModelUser.DefaultUserData[2].Id, ConstructionID = ModelConstruction.Constructions[2].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(4,0,0,0,0)), StartTime = new (4,0,0), EndTime = new (13,0,0)},
    new () {UserID = ModelUser.DefaultUserData[2].Id, ConstructionID = ModelConstruction.Constructions[3].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(5,0,0,0,0)), StartTime = new (4,0,0), EndTime = new (16,0,0)},
    new () {UserID = ModelUser.DefaultUserData[2].Id, ConstructionID = ModelConstruction.Constructions[0].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(6,0,0,0,0)), StartTime = new (6,0,0), EndTime = new (20,0,0)},

    new () {UserID = ModelUser.DefaultUserData[3].Id, ConstructionID = ModelConstruction.Constructions[5].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(1,0,0,0,0)), StartTime = new (8,0,0), EndTime = new (16,0,0)},
    new () {UserID = ModelUser.DefaultUserData[3].Id, ConstructionID = ModelConstruction.Constructions[5].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(2,0,0,0,0)), StartTime = new (7,0,0), EndTime = new (20,0,0)},
    new () {UserID = ModelUser.DefaultUserData[3].Id, ConstructionID = ModelConstruction.Constructions[5].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(3,0,0,0,0)), StartTime = new (7,0,0), EndTime = new (20,0,0)},
    new () {UserID = ModelUser.DefaultUserData[3].Id, ConstructionID = ModelConstruction.Constructions[5].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(4,0,0,0,0)), StartTime = new (6,0,0), EndTime = new (21,0,0)},
    new () {UserID = ModelUser.DefaultUserData[3].Id, ConstructionID = ModelConstruction.Constructions[5].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(5,0,0,0,0)), StartTime = new (10,0,0), EndTime = new (23,0,0)},
    new () {UserID = ModelUser.DefaultUserData[3].Id, ConstructionID = ModelConstruction.Constructions[5].ID, Date = DateOnly.FromDateTime(DateTime.Now - new TimeSpan(6,0,0,0,0)), StartTime = new (12,0,0), EndTime = new (17,0,0)},
  ];
}