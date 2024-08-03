using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

public class ModelConstruction
{
  [Key]
  public required string ID { get; set; }
  [Required]
  [StringLength(50)]
  public required string Name { get; set; }

  public IEnumerable<ModelWorkDay> WorkDays = new List<ModelWorkDay>();

  public static void ModelCreate(ModelBuilder builder)
  {
    builder.Entity<ModelConstruction>()
      .HasData(Constructions);
  }

  internal static IReadOnlyList<ModelConstruction> Constructions = [
    new (){ID = Guid.NewGuid().ToString(), Name =  "3maja"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Pychowicka"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Wizjonerów"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Grzegórzecka"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Tarnów Dach"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Tarnów Eurovia"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Quattro"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Rondo"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Narama"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Kielce"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Piaskowa"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Poleska"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Mogilska"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "Henniger Graby"},
    new (){ID = Guid.NewGuid().ToString(), Name =  "klimanowa"},
  ];
}