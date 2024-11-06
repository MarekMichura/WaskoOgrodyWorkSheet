namespace Wasko;

public class BuilderDayOffExpressionTargetRole : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpressionTargetRole>(static entity => {
      entity.HasData(StorageDayOffExpressionTargetRole.DaysOffTargets);
    });
  }
}