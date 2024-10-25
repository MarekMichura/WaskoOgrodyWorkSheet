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

    var chordsThatWasForgetting = before?
      .SelectMany(static workHour => workHour.Chords)
      .Select(static chord => new ModelResultWorkHours.Chord()
      {
        ChordID = chord.ID,
        ChordCount = 10,
        LocationID = chord.WorkHour!.WorkLocationID
      });

    return Results.Ok(chordsThatWasForgetting);
  }
}