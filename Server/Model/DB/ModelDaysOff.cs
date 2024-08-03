using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

public class ModelDaysOff
{
  [Key]
  public required string ID { get; set; }

  [Required]
  [DataType(DataType.Date)]
  public DateOnly Date { get; set; }

  [Required]
  public required string Reason { get; set; }

  [Required]
  public required bool Off { get; set; }

  public static void ModelCreate(ModelBuilder builder)
  {

  }
}