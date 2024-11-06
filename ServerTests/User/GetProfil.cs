namespace Test;

[Collection("WebApp")]
public class GetProfil(WebApp app) {
  public static IEnumerable<object[]> Users =>
    StorageUser.users.Select(static user => new object[] { user });

  public WebApplicationFactory<Program> App { get; init; } = app.App;

  [Theory]
  [MemberData(nameof(Users))]
  public async Task GetProfilValid(StorageUser user)
  {
    var Client = App.CreateClient();
    var content = JsonContent.Create(new ModelInputMapAuthenticate { Login = user.UserName, Password = user.Password });

    await Client.PostAsync("/Authenticate", content);
    var response = await Client.GetAsync("/GetProfil");
    var data = await response.Content.ReadFromJsonAsync<ModelResultUserProfil>();
    await Client.PostAsync("/Logout", null);

    Assert.True(response.IsSuccessStatusCode);
    Assert.Equal(user.UserName, data!.UserName);
  }

  [Theory]
  [InlineData("siema", "siema")]
  [InlineData("admin", "admin")]
  [InlineData("Marek", "UnKnow\" OR 1=1\"")]
  public async Task GetProfilInValid(string userName, string password)
  {
    var Client = App.CreateClient();
    var content = JsonContent.Create(new ModelInputMapAuthenticate { Login = userName, Password = password });

    await Client.PostAsync("/Authenticate", content);
    var response = await Client.GetAsync("/GetProfil");
    var data = await response.Content.ReadAsStringAsync();

    Assert.False(response.IsSuccessStatusCode);
    Assert.Empty(data);
  }
}