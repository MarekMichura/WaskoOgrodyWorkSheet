class BuilderDayOffDateTargetRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDateTargetRole>(entity =>
    {
      entity.HasData(StorageDayOffDateTargetRole.DaysOffTargets);
    });
  }
}