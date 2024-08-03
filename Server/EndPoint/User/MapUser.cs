using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;

public class ModelUserData
{
  public required string UserName { get; set; }
  public byte[]? Image { get; set; }
  public required DateOnly WorkStart { get; set; }
  public required string[] Roles { get; set; }
}

public class MapUser
{
  public static ModelUserData GetUserData(ModelUser model, IEnumerable<string> roles)
  {
    return new()
    {
      UserName = $"{model.FirstName} {model.LastName}",
      WorkStart = model.StartOfWork,
      Image = model.ProfileImage,
      Roles = roles.ToArray()
    };
  }

  public async static Task<ModelUser?> GetUser(HttpContext context, UserManager<ModelUser> userManager)
  {
    if (context.User.Identity is null || !context.User.Identity.IsAuthenticated)
      return null;

    return await userManager.FindByNameAsync(context.User.Identity.Name ?? "");
  }

  public async static Task<IResult> User(HttpContext context, UserManager<ModelUser> userManager)
  {
    var user = await GetUser(context, userManager);
    if (user is null)
      return Results.Unauthorized();

    return Results.Ok(GetUserData(user, await userManager.GetRolesAsync(user)));
  }
}