namespace Wasko;

class BuilderDayOffExpressionTargetUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpressionTargetUser>(entity =>
    {
#if DEBUG
      entity.HasData(StorageDayOffExpressionTargetUser.DaysOffTargets);
#endif
    });
  }
}