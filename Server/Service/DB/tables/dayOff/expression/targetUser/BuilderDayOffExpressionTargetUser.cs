#if DEBUG
namespace Wasko;

public class BuilderDayOffExpressionTargetUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpressionTargetUser>(static entity =>
    {
      entity.HasData(StorageDayOffExpressionTargetUser.DaysOffTargets);
    });
  }
}
#endif