
namespace Wasko;

public class BuilderNotification : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelNotification>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(static a => a.Target).WithMany(static a => a.Notifications);
    });
  }
}