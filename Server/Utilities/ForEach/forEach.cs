namespace Wasko;

public static partial class Extend {
  public static IEnumerable<T> ForEach<T>(this IEnumerable<T> objs, Action<T> fun)
  {
    foreach (var obj in objs) {
      fun(obj);
    }

    return objs;
  }
}