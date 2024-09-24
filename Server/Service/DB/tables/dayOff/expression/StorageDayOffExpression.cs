namespace Wasko;

class StorageDayOffExpression
{
  static private string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  static public IEnumerable<ModelDayOffExpression> DaysOff = _PolishHolidays();
  static public IEnumerable<ModelDayOffExpression> PolishHolidays = _PolishHolidays();
  static private IEnumerable<ModelDayOffExpression> _PolishHolidays()
  {
    yield return new()
    {
      ID = "1ba70b58-d25d-4837-9661-369513254cb2",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Wolne soboty",
      Order = 1,
      DayOfWeek = EnumDayOfWeek.Saturday,
    };
    yield return new()
    {
      ID = "ceac62d2-f2e4-4a75-b2f0-6d27c2034e2f",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Wolne niedziele",
      Order = 1,
      DayOfWeek = EnumDayOfWeek.Sunday,
    };
    yield return new()
    {
      ID = "c73896be-a7c6-40e4-bd0c-2bf861229466",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Nowy rok",
      Month = EnumMonth.January,
      Day = 1
    };
    yield return new()
    {
      ID = "1989fd11-07a0-496c-820d-cb78d06722a5",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Trzech Króli",
      Month = EnumMonth.January,
      Day = 6
    };
    yield return new()
    {
      ID = "7dd7ab24-4108-4365-bed5-317ebee2243d",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Święto pracy",
      Month = EnumMonth.May,
      Day = 1
    };
    yield return new()
    {
      ID = "9caccdfa-bf74-42cd-afa8-13cfda695999",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Święto konstytucji",
      Month = EnumMonth.May,
      Day = 3
    };
    yield return new()
    {
      ID = "3c1e3bae-7e41-40fe-afef-930d8a91dbed",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Wniebowzięcie Najświętszej Maryi Panny",
      Month = EnumMonth.August,
      Day = 15
    };
    yield return new()
    {
      ID = "ad3be738-bd43-4b68-a769-1fb75c20f03f",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Wszystkich świętych",
      Month = EnumMonth.November,
      Day = 1
    };
    yield return new()
    {
      ID = "878b8028-eeb7-4ad9-b018-d37f914f1324",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Święto Niepodległości",
      Month = EnumMonth.November,
      Day = 11
    };
    yield return new()
    {
      ID = "4f072e47-9eef-4a3d-859b-f350e5c7c115",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Boże narodzenie, dzień pierwszy",
      Month = EnumMonth.December,
      Day = 25
    };
    yield return new()
    {
      ID = "261d4eed-273d-4127-a49a-ea0201318421",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Boże narodzenie, dzień drugi",
      Month = EnumMonth.December,
      Day = 26
    };
    yield return new()
    {
      ID = "d08fc9d8-be2a-4b41-9690-9d25ac42bbb2",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Wielkanoc",
      DaysAfterEaster = 0,
    };
    yield return new()
    {
      ID = "9269fc85-b704-4cb8-a02e-0ca0999b95f6",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Poniedziałek wielkanocny",
      DaysAfterEaster = 1,
    };
    yield return new()
    {
      ID = "6b8ba2b0-f4fb-4370-945c-3da1394ce55e",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Zielone Świątki",
      DaysAfterEaster = 49,
    };
    yield return new()
    {
      ID = "168416f7-c582-4c95-a336-13e477abace7",
      Off = true,
      AuthorID = userID("admin"),
      ApproverID = userID("admin"),

      Reason = "Boże Ciało",
      DaysAfterEaster = 60,
    };
  }
}