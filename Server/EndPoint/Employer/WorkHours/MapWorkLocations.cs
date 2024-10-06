namespace Wasko;

struct ModelResultWorkLocation
{
  public string LocationName { get; set; }
  public string LocationID { get; set; }
}

class MapWorkLocations
{
  public static IResult WorkLocation(IServiceWork work)
  {
    return Results.Ok(work.GetWorkLocations().Select(a => new ModelResultWorkLocation
    {
      LocationID = a.ID,
      LocationName = a.Name
    }));
  }
}