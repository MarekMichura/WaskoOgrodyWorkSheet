using System.Net;

namespace Wasko;

public static partial class MapUser {

  public static async Task<IResult> MapAuthenticateForm([FromForm] string UserName, [FromForm] string Password, [FromForm] string Redirect, IRepUser rep, HttpRequest request, IWebHostEnvironment environment)
  {
    var result = await MapAuthenticate(new ModelInputMapAuthenticate { UserName = UserName, Password = Password }, rep, environment);

    if (result is Ok<ModelOutPutMapAuthenticate> okResult && okResult.Value.Authenticated) {
      return Results.Redirect(Redirect.SafeStringPath());
    }
    else {
      var path = request.GetRefererPath("/login").SafeStringPath();
      var redirect = $"redirect={Redirect.SafeStringPath()}";
      var userName = $"userName={Uri.EscapeDataString(UserName)}";
      var error = $"error=true";

      var redirectUrl = $"{path}?{userName}&{error}&{redirect}";

      return Results.Redirect(redirectUrl);
    }
  }

  public static async Task<IResult> MapAuthenticate(ModelInputMapAuthenticate model, IRepUser rep, IWebHostEnvironment environment)
  {
    if (environment.IsDevelopment()) Thread.Sleep(1000);

    if (await rep.Login(model.UserName, model.Password)) {
      var id = rep.GetCurrentID() ?? throw new NullReferenceException();
      var (profil, _) = await rep.GetUserProfilAsync(id);
      return Results.Ok(new ModelOutPutMapAuthenticate {
        Authenticated = true,
        Profile = profil
      });
    }

    return Results.Ok(new ModelOutPutMapAuthenticate { Authenticated = false });
  }
}
