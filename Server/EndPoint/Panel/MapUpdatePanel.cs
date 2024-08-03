using Microsoft.AspNetCore.Identity;

public class MapModelTimeRange
{
  public required string Date { get; set; }
  public required string Start { get; set; }
  public required string End { get; set; }
};

class MapUpdatePanel
{
  public async static Task<IResult> UpdatePanel(MapModelTimeRange model, ICalendarRep rep, HttpContext context, UserManager<ModelUser> userManager)
  {
    var user = await MapUser.GetUser(context, userManager);
    if (user is null)
      return Results.Unauthorized();

    rep.SetTime(DateOnly.Parse(model.Date), TimeOnly.Parse(model.Start), TimeOnly.Parse(model.End), user);
    return Results.Ok();
  }
}

