namespace Wasko;

class StorageDayOffExpression
{
  private static readonly ModelDayOffExpression PolishHoliday1 = new()
  {
    ID = "1ba70b58-d25d-4837-9661-369513254cb2",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Wolne soboty",
    Order = 1,
    DayOfWeek = EnumDayOfWeek.Saturday,
  };

  private static readonly ModelDayOffExpression PolishHoliday2 = new()
  {
    ID = "ceac62d2-f2e4-4a75-b2f0-6d27c2034e2f",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Wolne niedziele",
    Order = 1,
    DayOfWeek = EnumDayOfWeek.Sunday,
  };

  private static readonly ModelDayOffExpression PolishHoliday3 = new()
  {
    ID = "c73896be-a7c6-40e4-bd0c-2bf861229466",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Nowy rok",
    Month = EnumMonth.January,
    Day = 1
  };

  private static readonly ModelDayOffExpression PolishHoliday4 = new()
  {
    ID = "1989fd11-07a0-496c-820d-cb78d06722a5",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Trzech Króli",
    Month = EnumMonth.January,
    Day = 6
  };

  private static readonly ModelDayOffExpression PolishHoliday5 = new()
  {
    ID = "7dd7ab24-4108-4365-bed5-317ebee2243d",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Święto pracy",
    Month = EnumMonth.May,
    Day = 1
  };

  private static readonly ModelDayOffExpression PolishHoliday6 = new()
  {
    ID = "9caccdfa-bf74-42cd-afa8-13cfda695999",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Święto konstytucji",
    Month = EnumMonth.May,
    Day = 3
  };

  private static readonly ModelDayOffExpression PolishHoliday7 = new()
  {
    ID = "3c1e3bae-7e41-40fe-afef-930d8a91dbed",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Wniebowzięcie Najświętszej Maryi Panny",
    Month = EnumMonth.August,
    Day = 15
  };

  private static readonly ModelDayOffExpression PolishHoliday8 = new()
  {
    ID = "ad3be738-bd43-4b68-a769-1fb75c20f03f",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Wszystkich świętych",
    Month = EnumMonth.November,
    Day = 1
  };

  private static readonly ModelDayOffExpression PolishHoliday9 = new()
  {
    ID = "878b8028-eeb7-4ad9-b018-d37f914f1324",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Święto Niepodległości",
    Month = EnumMonth.November,
    Day = 11
  };

  private static readonly ModelDayOffExpression PolishHoliday10 = new()
  {
    ID = "4f072e47-9eef-4a3d-859b-f350e5c7c115",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Boże narodzenie, dzień pierwszy",
    Month = EnumMonth.December,
    Day = 25
  };

  private static readonly ModelDayOffExpression PolishHoliday11 = new()
  {
    ID = "261d4eed-273d-4127-a49a-ea0201318421",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Boże narodzenie, dzień drugi",
    Month = EnumMonth.December,
    Day = 26
  };

  private static readonly ModelDayOffExpression PolishHoliday12 = new()
  {
    ID = "d08fc9d8-be2a-4b41-9690-9d25ac42bbb2",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Wielkanoc",
    DaysAfterEaster = 0,
  };

  private static readonly ModelDayOffExpression PolishHoliday13 = new()
  {
    ID = "9269fc85-b704-4cb8-a02e-0ca0999b95f6",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Poniedziałek wielkanocny",
    DaysAfterEaster = 1,
  };

  private static readonly ModelDayOffExpression PolishHoliday14 = new()
  {
    ID = "6b8ba2b0-f4fb-4370-945c-3da1394ce55e",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Zielone Świątki",
    DaysAfterEaster = 49,
  };

  private static readonly ModelDayOffExpression PolishHoliday15 = new()
  {
    ID = "168416f7-c582-4c95-a336-13e477abace7",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Boże Ciało",
    DaysAfterEaster = 60,
  };

#if DEBUG
  private static readonly ModelDayOffExpression PolishHolidayDebug = new()
  {
    ID = "324359d6-af00-4baf-bd61-afa615ed76b9",
    Off = true,
    AuthorID = StorageUser.admin!,
    ApproverID = StorageUser.admin!,
    Reason = "Wolne dla najlepszego pracownika",
    Month = EnumMonth.October,
  };
#endif

#if DEBUG
  public static IEnumerable<ModelDayOffExpression> DaysOff = [PolishHoliday1, PolishHoliday2, PolishHoliday3, PolishHoliday4, PolishHoliday5, PolishHoliday6, PolishHoliday7, PolishHoliday8, PolishHoliday9, PolishHoliday10, PolishHoliday11, PolishHoliday12, PolishHoliday13, PolishHoliday14, PolishHoliday15, PolishHolidayDebug];
#else
  static public IEnumerable<ModelDayOffExpression> DaysOff = [PolishHoliday1, PolishHoliday2, PolishHoliday3, PolishHoliday4, PolishHoliday5, PolishHoliday6, PolishHoliday7, PolishHoliday8, PolishHoliday9, PolishHoliday10, PolishHoliday11, PolishHoliday12, PolishHoliday13, PolishHoliday14, PolishHoliday15];
#endif

#if DEBUG
  public static string free_day = PolishHolidayDebug.ID;
#endif

  public static string free_saturdays = PolishHoliday1.ID;
  public static string free_sundays = PolishHoliday2.ID;
  public static string new_year = PolishHoliday3.ID;
  public static string epiphany = PolishHoliday4.ID;
  public static string labor_day = PolishHoliday5.ID;
  public static string constitution_day = PolishHoliday6.ID;
  public static string assumption_of_the_blessed_virgin_mary = PolishHoliday7.ID;
  public static string all_saints_day = PolishHoliday8.ID;
  public static string independence_day = PolishHoliday9.ID;
  public static string christmas_day_first = PolishHoliday10.ID;
  public static string christmas_day_second = PolishHoliday11.ID;
  public static string easter = PolishHoliday12.ID;
  public static string easter_monday = PolishHoliday13.ID;
  public static string pentecost = PolishHoliday14.ID;
  public static string corpus_christi = PolishHoliday15.ID;
}
