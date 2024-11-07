namespace Wasko;

public readonly struct CacheResult<T>(T data, DateTime CacheTime) {
  public T Data { get; init; } = data;
  public DateTime CacheTime { get; init; } = CacheTime;

  public void Deconstruct(out T data, out DateTime cacheTime)
  {
    data = Data;
    cacheTime = CacheTime;
  }
}
