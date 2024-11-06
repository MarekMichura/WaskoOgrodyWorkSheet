namespace Wasko;

using MyDictionary = Dictionary<DateOnly, List<ModelDayOff>>;

public static partial class Extend {
  public static MyDictionary ConvertToDictionary<T>(
    this IEnumerable<T> elements,
    Func<T, IEnumerable<DateOnly>> getDate)
    where T : ModelDayOff
  {
    var result = new MyDictionary();
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