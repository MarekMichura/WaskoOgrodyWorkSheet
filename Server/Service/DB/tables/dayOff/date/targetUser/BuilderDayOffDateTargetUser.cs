#if DEBUG
namespace Wasko;

class BuilderDayOffDateTargetUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDateTargetUser>(entity =>
    {
      entity.HasData(StorageDayOffDateTargetUser.DaysOffTargets);
    });
  }
}
#endif