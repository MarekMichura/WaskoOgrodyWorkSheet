#if DEBUG
namespace Wasko;

public class BuilderDayOffDateTargetUser : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDateTargetUser>(static entity => {
      entity.HasData(StorageDayOffDateTargetUser.DaysOffTargets);
    });
  }
}
#endif