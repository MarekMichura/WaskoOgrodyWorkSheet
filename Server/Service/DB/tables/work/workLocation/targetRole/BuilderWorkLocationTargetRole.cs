namespace Wasko;

public class BuilderWorkLocationTargetRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocationTargetRole>(static entity =>
    {
      entity.HasData(StorageWorkLocationTargetRole.WorkLocationRoles);
    });
  }
}