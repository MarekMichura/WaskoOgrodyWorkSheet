namespace Wasko;

public class StorageDayOffExpression {
  public static readonly ModelDayOffExpression DayOffSaturday = new() {
    ID = "1ba70b58-d25d-4837-9661-369513254cb2",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Wolne soboty",
    Order = 1,
    DayOfWeek = EnumDayOfWeek.Saturday,
  };
  public readonly static string free_saturdays = DayOffSaturday.ID;

  public static readonly ModelDayOffExpression DayOffSunday = new() {
    ID = "ceac62d2-f2e4-4a75-b2f0-6d27c2034e2f",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Wolne niedziele",
    Order = 1,
    DayOfWeek = EnumDayOfWeek.Sunday,
  };
  public readonly static string free_sundays = DayOffSunday.ID;

  public static readonly ModelDayOffExpression DayOffNewYear = new() {
    ID = "c73896be-a7c6-40e4-bd0c-2bf861229466",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Nowy rok",
    Month = EnumMonth.January,
    Day = 1
  };
  public readonly static string new_year = DayOffNewYear.ID;

  public static readonly ModelDayOffExpression DayOffEpiphany = new() {
    ID = "1989fd11-07a0-496c-820d-cb78d06722a5",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Trzech Króli",
    Month = EnumMonth.January,
    Day = 6
  };
  public readonly static string epiphany = DayOffEpiphany.ID;

  public static readonly ModelDayOffExpression DayOffLaborDay = new() {
    ID = "7dd7ab24-4108-4365-bed5-317ebee2243d",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Święto pracy",
    Month = EnumMonth.May,
    Day = 1
  };
  public readonly static string labor_day = DayOffLaborDay.ID;

  public static readonly ModelDayOffExpression DayOffConstitutionDay = new() {
    ID = "9caccdfa-bf74-42cd-afa8-13cfda695999",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Święto konstytucji",
    Month = EnumMonth.May,
    Day = 3
  };
  public readonly static string constitution_day = DayOffConstitutionDay.ID;

  public static readonly ModelDayOffExpression DayOffAssumption = new() {
    ID = "3c1e3bae-7e41-40fe-afef-930d8a91dbed",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Wniebowzięcie Najświętszej Maryi Panny",
    Month = EnumMonth.August,
    Day = 15
  };
  public readonly static string assumption = DayOffAssumption.ID;

  public static readonly ModelDayOffExpression DayOffAllSaints = new() {
    ID = "ad3be738-bd43-4b68-a769-1fb75c20f03f",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Wszystkich świętych",
    Month = EnumMonth.November,
    Day = 1
  };
  public readonly static string all_saints_day = DayOffAllSaints.ID;

  public static readonly ModelDayOffExpression DayOffIndependence = new() {
    ID = "878b8028-eeb7-4ad9-b018-d37f914f1324",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Święto Niepodległości",
    Month = EnumMonth.November,
    Day = 11
  };
  public readonly static string independence_day = DayOffIndependence.ID;

  public static readonly ModelDayOffExpression DayOffChristmas = new() {
    ID = "4f072e47-9eef-4a3d-859b-f350e5c7c115",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Boże narodzenie, dzień pierwszy",
    Month = EnumMonth.December,
    Day = 25
  };
  public readonly static string christmas_day_first = DayOffChristmas.ID;

  public static readonly ModelDayOffExpression DayOffSecondChristmas = new() {
    ID = "261d4eed-273d-4127-a49a-ea0201318421",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Boże narodzenie, dzień drugi",
    Month = EnumMonth.December,
    Day = 26
  };
  public readonly static string christmas_day_second = DayOffSecondChristmas.ID;

  public static readonly ModelDayOffExpression DayOffEaster = new() {
    ID = "d08fc9d8-be2a-4b41-9690-9d25ac42bbb2",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Wielkanoc",
    DaysAfterEaster = 0,
  };
  public readonly static string easter = DayOffEaster.ID;

  public static readonly ModelDayOffExpression DayOffEasterMonday = new() {
    ID = "9269fc85-b704-4cb8-a02e-0ca0999b95f6",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Poniedziałek wielkanocny",
    DaysAfterEaster = 1,
  };
  public readonly static string easter_monday = DayOffEasterMonday.ID;

  public static readonly ModelDayOffExpression DayOffPentecost = new() {
    ID = "6b8ba2b0-f4fb-4370-945c-3da1394ce55e",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Zielone Świątki",
    DaysAfterEaster = 49,
  };
  public readonly static string pentecost = DayOffPentecost.ID;

  public static readonly ModelDayOffExpression DayOffCorpusChristi = new() {
    ID = "168416f7-c582-4c95-a336-13e477abace7",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Boże Ciało",
    DaysAfterEaster = 60,
  };
  public readonly static string corpus_christi = DayOffCorpusChristi.ID;

#if DEBUG
  public static readonly ModelDayOffExpression DayOffDebug = new() {
    ID = "324359d6-af00-4baf-bd61-afa615ed76b9",
    Off = true,
    AuthorID = StorageUser.Admin!,
    ApproverID = StorageUser.Admin!,
    Reason = "Wolne dla najlepszego pracownika",
    Month = EnumMonth.October,
  };
  public readonly static string free_day = DayOffDebug.ID;

  public readonly static ModelDayOffExpression[] DaysOff =
    [DayOffSaturday, DayOffSunday, DayOffNewYear, DayOffEpiphany, DayOffLaborDay, DayOffConstitutionDay, DayOffAssumption, DayOffAllSaints, DayOffIndependence, DayOffChristmas, DayOffSecondChristmas, DayOffEaster, DayOffEasterMonday, DayOffPentecost, DayOffCorpusChristi, DayOffDebug];
#else
  public readonly static ModelDayOffExpression[] DaysOff = 
    [DayOffSaturday, DayOffSunday, DayOffNewYear, DayOffEpiphany, DayOffLaborDay, DayOffConstitutionDay, DayOffAssumption, DayOffAllSaints, DayOffIndependence, DayOffChristmas, DayOffSecondChristmas, DayOffEaster, DayOffEasterMonday, DayOffPentecost, DayOffCorpusChristi];
#endif
}
