namespace Wasko;

public readonly struct ModelInputWorkHours
{
  public class WorkHours
  {
    public required string WorkLocationID { get; init; }
    public required TimeOnly WorkStart { get; init; }
    public required TimeOnly WorkEnd { get; init; }
  }

  public DateOnly Date { get; init; }
  public List<WorkHours> Hours { get; init; }
}

public struct ModelResultWorkHours
{
  public struct Chord
  {
    public required string LocationID { get; set; }
    public required string ChordID { get; set; }
    public required int ChordCount { get; set; }
  }
  public IEnumerable<Chord> PrevChords { get; set; }
}

public class MapWorkHours
{
  public static IResult WorkHours(ModelInputWorkHours model, IServiceWork work)
  {
    var before = work.AddOrChangeWorkHours(model.Date, model.Hours);

    if (!before!.Any())
    {
      return Results.Ok();
    }

    var chordsThatWasForgetting = before?.SelectMany(static a => a.Chords)
      .Select(static a => new ModelResultWorkHours.Chord()
      {
        ChordID = a.ID,
        ChordCount = 10,
        LocationID = a.WorkHour!.WorkLocationID
      });

    return Results.Ok(chordsThatWasForgetting);
  }
}