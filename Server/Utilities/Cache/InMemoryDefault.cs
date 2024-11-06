namespace Wasko;

public static partial class Extend {
  private static readonly MemoryCacheEntryOptions _cacheOpt = new() {
    AbsoluteExpiration = null,
    SlidingExpiration = TimeSpan.FromMinutes(10),
    Priority = CacheItemPriority.Normal,
  };

  public static void SetDefaultOptions(this ICacheEntry cache)
  {
    cache.SetOptions(_cacheOpt);
  }
}