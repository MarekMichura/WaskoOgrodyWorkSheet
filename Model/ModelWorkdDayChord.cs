using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

public class ModelWorkDayChord
{
  [Required]
  public required string ChordID { get; set; }
  [Required]
  public ModelChord? Chord { get; set; }
  [Required]
  public required string UserID { get; set; }
  [Required]
  [DataType(DataType.Date)]
  public DateOnly Date { get; set; }
  [Required]
  public ModelWorkDay? WorkDay { get; set; }
  [Required]
  public long Count { get; set; }

  public static void ModelCreate(ModelBuilder builder)
  {
    builder.Entity<ModelWorkDayChord>()
      .HasOne(x => x.Chord)
      .WithMany(x => x.WorkDayChords)
      .HasForeignKey(x => x.ChordID);

    builder.Entity<ModelWorkDayChord>()
      .HasOne(x => x.WorkDay)
      .WithMany(x => x.WorkDayChords)
      .HasForeignKey(x => new { x.UserID, x.Date });

    builder.Entity<ModelWorkDayChord>()
      .HasKey(x => new
      {
        x.ChordID,
        x.UserID,
        x.Date
      });

    builder.Entity<ModelWorkDayChord>()
      .HasData(WorkDays);
  }

  private static IReadOnlyList<ModelWorkDayChord> WorkDays = [
    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 1), Count =84},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 1), Count =18},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 1), Count =73},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 1), Count =15},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 1), Count =71},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 2), Count =68},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 2), Count =19},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 2), Count =39},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 2), Count =16},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 2), Count =33},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 3), Count =19},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 3), Count =48},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 3), Count =90},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 3), Count =96},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 3), Count =54},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 4), Count =14},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 4), Count =34},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 4), Count =72},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 4), Count =35},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 4), Count =91},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 5), Count =29},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 5), Count =18},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 5), Count =38},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 5), Count =81},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 5), Count =78},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 6), Count =4 },
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 6), Count =40},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 6), Count =73},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 6), Count =28},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[2].Id, Date = new(2024, 6, 6), Count =89},



    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 1), Count =46},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 1), Count =46},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 1), Count =31},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 1), Count =23},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 1), Count =37},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 2), Count =9 },
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 2), Count =91},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 2), Count =85},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 2), Count =22},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 2), Count =67},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 3), Count =63},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 3), Count =78},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 3), Count =97},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 3), Count =60},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 3), Count =94},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 4), Count =40},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 4), Count =61},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 4), Count =70},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 4), Count =31},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 4), Count =34},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 5), Count =0 },
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 5), Count =16},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 5), Count =73},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 5), Count =39},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 5), Count =75},

    new(){ChordID = ModelChord.Chords[0].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 6), Count =64},
    new(){ChordID = ModelChord.Chords[1].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 6), Count =40},
    new(){ChordID = ModelChord.Chords[2].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 6), Count =27},
    new(){ChordID = ModelChord.Chords[3].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 6), Count =34},
    new(){ChordID = ModelChord.Chords[4].ID, UserID = ModelUser.DefaultUserData[3].Id, Date = new(2024, 6, 6), Count =53},
  ];
}