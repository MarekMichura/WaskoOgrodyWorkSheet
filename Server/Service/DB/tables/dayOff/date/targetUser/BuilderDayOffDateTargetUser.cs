namespace Wasko;

class BuilderDayOffDateTargetUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
#if DEBUG
    builder.Entity<ModelDayOffDateTargetUser>(entity =>
    {
      entity.HasData(StorageDayOffDateTargetUser.DaysOffTargets);
    });
#endif
  }
}