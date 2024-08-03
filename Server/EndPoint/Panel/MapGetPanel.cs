using Microsoft.AspNetCore.Identity;

public class MapModelDateRange
{
  public required DateOnly Start { get; set; }
  public required DateOnly End { get; set; }
};

class MapGetPanel
{
  public async static Task<IResult> GetPanel(MapModelDateRange model, ICalendarRep rep, HttpContext context, UserManager<ModelUser> userManager)
  {
    var user = await MapUser.GetUser(context, userManager);
    if (user is null)
      return Results.Unauthorized();

    return Results.Ok(rep.getMonthlyWork(model.Start, model.End, user));
  }
}

