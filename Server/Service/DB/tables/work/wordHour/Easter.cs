namespace Wasko;

public static class Easter
{
  private static Dictionary<int, DateOnly> eastern = new Dictionary<int, DateOnly>();

  public static DateOnly EasternDay(int year)
  {
    if (eastern.ContainsKey(year)) return eastern[year];
    var month = 3;

    var a = year % 19 + 1;
    var b = year / 100 + 1;
    var c = (3 * b) / 4 - 12;
    var d = (8 * b + 5) / 25 - 5;
    var e = (5 * year) / 4 - c - 10;

    var f = (11 * a + 20 + d - c) % 30;
    if (f == 24)
      f++;
    if ((f == 25) && (a > 11))
      f++;

    var g = 44 - f;
    if (g < 21)
      g = g + 30;

    var day = (g + 7) - ((e + g) % 7);
    if (day > 31)
    {
      day = day - 31;
      month = 4;
    }

    var date = new DateOnly(year, month, day);
    eastern[year] = date;
    return date;
  }

  public static int DaysAfterEaster(DateOnly date)
  {
    return date.DayOfYear - EasternDay(date.Year).DayOfYear;
  }
}