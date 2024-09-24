namespace Wasko;

class BuilderDayOffExpressionTargetRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpressionTargetRole>(entity =>
    {
      entity.HasData(StorageDayOffExpressionTargetRole.DaysOffTargets);
    });
  }
}