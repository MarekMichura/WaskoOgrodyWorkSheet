namespace Wasko;

interface IServiceCalendar
{
  CalendarResponse GetData(EnumMonth month, int year);
}