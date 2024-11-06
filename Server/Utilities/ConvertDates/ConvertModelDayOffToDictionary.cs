namespace Wasko;

public static partial class Extend {
  public static Dictionary<DateOnly, List<ModelDayOff>> ConvertToDictionary<T>(this IEnumerable<T> elements, Func<T, IEnumerable<DateOnly>> getDate) where T : ModelDayOff
  {
    var result = new Dictionary<DateOnly, List<ModelDayOff>>();
    foreach (var element in elements) {
      var dates = getDate(element);
      foreach (var date in dates) {
        if (!result.TryGetValue(date, out var value)) {
          value = [element];
          result.Add(date, value);
          continue;
        }
        value.Add(element);
      }
    }

    return result;
  }
}