namespace Test;

[Collection("WebApp")]
public class GetCalendar(WebApp app)
{
  public WebApplicationFactory<Program> App = app.App;

  [Fact]
  public async Task NotEmployerRequestCalendar()
  {
    var Client = App.CreateClient();
    var loginContent = JsonContent.Create(new ModelInputMapAuthenticate
    {
      Login = StorageUser.AdminUser.UserName,
      Password = StorageUser.AdminUser.Password
    });
    var calendarContent = JsonContent.Create(new ModelInputMapEmployerCalendar
    {
      Start = DateOnly.Parse("2024-01-01"),
      End = DateOnly.Parse("2024-12-31")
    });

    await Client.PostAsync("/Authenticate", loginContent);
    var response = await Client.PostAsync("/CalendarData", calendarContent);

    Assert.False(response.IsSuccessStatusCode);
  }

  [Fact]
  public async Task EmployerRequestCalendar()
  {
    var Client = App.CreateClient();
    var loginContent = JsonContent.Create(new ModelInputMapAuthenticate
    {
      Login = StorageUser.DimaUser.UserName,
      Password = StorageUser.DimaUser.Password
    });
    var calendarContent = JsonContent.Create(new ModelInputMapEmployerCalendar
    {
      Start = DateOnly.Parse("2024-01-01"),
      End = DateOnly.Parse("2024-12-31")
    });

    await Client.PostAsync("/Authenticate", loginContent);
    var response = await Client.PostAsync("/CalendarData", calendarContent);

    Assert.True(response.IsSuccessStatusCode);
  }

  [Theory]
  [InlineData("2000-01-01", "2000-01-10", 10)]
  [InlineData("2000-01-01", "2010-01-01", 3654)]
  [InlineData("2024-01-01", "2024-12-31", 366)]
  public async Task CalendarResponseDayCount(string start, string end, int days)
  {
    var Client = App.CreateClient();
    var loginContent = JsonContent.Create(new ModelInputMapAuthenticate
    {
      Login = StorageUser.DimaUser.UserName,
      Password = StorageUser.DimaUser.Password
    });
    var calendarContent = JsonContent.Create(new ModelInputMapEmployerCalendar
    {
      Start = DateOnly.Parse(start),
      End = DateOnly.Parse(end)
    });

    await Client.PostAsync("/Authenticate", loginContent);
    var response = await Client.PostAsync("/CalendarData", calendarContent);
    var data = await response.Content.ReadFromJsonAsync<Dictionary<DateOnly, ModelOutputMapEmployerCalendar>>();

    Assert.Equal(days, data!.Count);
  }

  [Fact]
  public async Task CalendarResponseCheckData()
  {
    var Client = App.CreateClient();
    var loginContent = JsonContent.Create(new ModelInputMapAuthenticate
    {
      Login = StorageUser.DimaUser.UserName,
      Password = StorageUser.DimaUser.Password
    });
    var calendarContent = JsonContent.Create(new ModelInputMapEmployerCalendar
    {
      Start = DateOnly.Parse("2024-01-01"),
      End = DateOnly.Parse("2024-12-31")
    });

    await Client.PostAsync("/Authenticate", loginContent);
    var response = await Client.PostAsync("/CalendarData", calendarContent);
    var data = await response.Content.ReadFromJsonAsync<Dictionary<DateOnly, ModelOutputMapEmployerCalendar>>();
    var daysOff = data!.SelectMany(static data => data.Value.DayOff);
    var workingHours = data!.SelectMany(static data => data.Value.WorkingHours);

    Assert.True(daysOff.Any());
    Assert.True(workingHours.Any());
  }

  [Fact]
  public async Task CalendarWrongDateRange()
  {
    var Client = App.CreateClient();
    var loginContent = JsonContent.Create(new ModelInputMapAuthenticate
    {
      Login = StorageUser.DimaUser.UserName,
      Password = StorageUser.DimaUser.Password
    });
    var calendarContent = JsonContent.Create(new ModelInputMapEmployerCalendar
    {
      Start = DateOnly.Parse("2023-01-01"),
      End = DateOnly.Parse("2024-12-31")
    });

    await Client.PostAsync("/Authenticate", loginContent);
    var response = await Client.PostAsync("/CalendarData", calendarContent);

    Assert.True(response.IsSuccessStatusCode);
  }
}
