namespace Wasko;

class BuilderDayOffDateTargetRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
#if DEBUG
    builder.Entity<ModelDayOffDateTargetRole>(entity =>
    {
      entity.HasData(StorageDayOffDateTargetRole.DaysOffTargets);
    });
#endif
  }
}