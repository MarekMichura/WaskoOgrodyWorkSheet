namespace Wasko;

public readonly struct ModelInputCalendar
{
  public required DateOnly Start { get; init; }
  public required DateOnly End { get; init; }
}
