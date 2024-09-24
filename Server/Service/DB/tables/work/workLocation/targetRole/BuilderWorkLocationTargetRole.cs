namespace Wasko;

class BuilderWorkLocationTargetRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocationTargetRole>(entity =>
    {
      entity.HasData(StorageWorkLocationTargetRole.WorkLocationRoles);
    });
  }
}