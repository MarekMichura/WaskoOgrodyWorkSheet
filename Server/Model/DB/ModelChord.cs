using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

public class ModelChord
{
  [Key]
  public required string ID { get; set; }
  [Required]
  [StringLength(50)]
  public required string Name { get; set; }
  [Required]
  [DataType(DataType.Currency)]
  public required decimal Price { get; set; }

  [DataType(DataType.Upload)]
  public byte[]? ChordImage { get; set; }
  public IEnumerable<ModelWorkDayChord> WorkDayChords { get; set; } = new List<ModelWorkDayChord>();

  public static void ModelCreate(ModelBuilder builder)
  {
    builder.Entity<ModelChord>()
      .HasData(Chords);
  }

  internal static IReadOnlyList<ModelChord> Chords = [
    new (){ID = Guid.NewGuid().ToString(), Name =  "goły korzeń", Price = 1},
    new (){ID = Guid.NewGuid().ToString(), Name =  "p9/p11/c1,5", Price = 1.1M},
    new (){ID = Guid.NewGuid().ToString(), Name =  "C2", Price = 2},
    new (){ID = Guid.NewGuid().ToString(), Name =  "C3", Price = 2.5M},
    new (){ID = Guid.NewGuid().ToString(), Name =  "C5", Price = 3}
  ];
}