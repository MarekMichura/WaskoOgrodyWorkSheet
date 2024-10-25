namespace Test;

[Collection("WebApp")]
public class LoginTest(WebApp app)
{
  public static IEnumerable<object[]> Users =>
    StorageUser.users.Select(static user => new object[] { user });

  public WebApplicationFactory<Program> App { get; init; } = app.App;

  [Theory]
  [MemberData(nameof(Users))]
  public async Task LoginValid(StorageUser user)
  {
    var Client = App.CreateClient();
    var content = JsonContent.Create(new ModelInputAuthenticate { Login = user.UserName, Password = user.Password });

    var response = await Client.PostAsync("/Authenticate", content);
    var data = await response.Content.ReadFromJsonAsync<ModelResultAuthenticate>();
    var cookies1 = response.Headers.SingleOrDefault(static header => header.Key == HeaderNames.SetCookie)
      .Value.Select(static a => new Cookies(a));
    response = await Client.PostAsync("/Logout", null);
    var cookies2 = response.Headers.SingleOrDefault(static header => header.Key == HeaderNames.SetCookie)
      .Value.Select(static a => new Cookies(a));

    Assert.True(response.IsSuccessStatusCode);
    Assert.True(data.Authenticated);
    Assert.Equal(data.Profil?.UserName, user.UserName);

    Assert.NotEmpty(cookies1.Last(static cookie => cookie.Name == ".AspNetCore.Identity.Application").Value);
    Assert.Empty(cookies2.Last(static cookie => cookie.Name == ".AspNetCore.Identity.Application").Value);
  }

  [Theory]
  [InlineData("siema", "siema")]
  [InlineData("admin", "admin")]
  [InlineData("Marek", "UnKnow\" OR 1=1\"")]
  public async Task LoginInValid(string userName, string password)
  {
    var Client = App.CreateClient();
    var content = JsonContent.Create(new ModelInputAuthenticate { Login = userName, Password = password });

    var response = await Client.PostAsync("/Authenticate", content);
    var data = await response.Content.ReadFromJsonAsync<ModelResultAuthenticate>();
    var cookies = response.Headers.SingleOrDefault(static header => header.Key == HeaderNames.SetCookie)
      .Value.Select(static a => new Cookies(a));

    Assert.True(response.IsSuccessStatusCode);
    Assert.False(data.Authenticated);
    Assert.Null(data.Profil);
    Assert.Empty(cookies.Last(static cookie => cookie.Name == ".AspNetCore.Identity.Application").Value);
  }
}