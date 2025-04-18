namespace Wasko;

public static partial class MapUser {

  public static async Task<IResult> MapAuthenticateForm([FromForm] string UserName, [FromForm] string Password, [FromForm] string Redirect, IRepUser rep)
  {
    var result = await MapAuthenticate(new ModelInputMapAuthenticate { UserName = UserName, Password = Password }, rep);

    if (result is Ok<ModelOutPutMapAuthenticate> okResult && okResult.Value.Authenticated) {
      return Results.Redirect(Redirect);
    }

    return Results.Redirect($"/login?redirect={Redirect}&userName={System.Net.WebUtility.UrlEncode(UserName)}&error={System.Net.WebUtility.UrlEncode("Niepoprawny login lub hasło")}");
  }

  public static async Task<IResult> MapAuthenticate(ModelInputMapAuthenticate model, IRepUser rep)
  {
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
