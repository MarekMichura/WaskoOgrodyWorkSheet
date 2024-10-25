namespace Wasko;

struct ModelResultWorkLocation
{
  public string LocationName { get; set; }
  public string LocationID { get; set; }
}

public class MapWorkLocations
{
  public static IResult WorkLocation(IServiceWork work)
  {
    var result = work
      .GetWorkLocations()
      .Select(static workLocation => new ModelResultWorkLocation
      {
        LocationID = workLocation.ID,
        LocationName = workLocation.Name
      });

    return Results.Ok(result);
  }
}