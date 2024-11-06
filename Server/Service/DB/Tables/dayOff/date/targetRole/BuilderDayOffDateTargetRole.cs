#if DEBUG
namespace Wasko;

public class BuilderDayOffDateTargetRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDateTargetRole>(static entity =>
    {
      entity.HasData(StorageDayOffDateTargetRole.DaysOffTargets);
    });
  }
}
#endif