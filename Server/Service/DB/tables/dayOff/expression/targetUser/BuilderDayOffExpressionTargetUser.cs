class BuilderDayOffExpressionTargetUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpressionTargetUser>(entity =>
    {
      entity.HasData(StorageDayOffExpressionTargetUser.DaysOffTargets);
    });
  }
}