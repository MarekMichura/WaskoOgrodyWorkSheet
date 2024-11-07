using Microsoft.AspNetCore.Components;

namespace Wasko;

public readonly struct ModelInputMapEmployerCalendar {
  [SupplyParameterFromQuery(Name = "start")]
  [DefaultValue("2024-01-01")]
  public DateOnly? Start { get; init; }
  [SupplyParameterFromQuery(Name = "end")]
  [DefaultValue("2024-12-31")]
  public DateOnly? End { get; init; }

  public void Deconstruct(out DateOnly start, out DateOnly end)
  {
    start = Start ?? throw new NullReferenceException();
    end = End ?? throw new NullReferenceException();
  }
}
