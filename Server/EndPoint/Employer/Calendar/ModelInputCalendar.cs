namespace Wasko;

readonly struct ModelInputCalendar
{
  public required DateOnly Start { get; init; }
  public required DateOnly End { get; init; }
  public DateOnly? LastUpdate { get; init; }
}
