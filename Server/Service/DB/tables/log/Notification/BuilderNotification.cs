
namespace Wasko;

class BuilderNotification : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelNotification>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(a => a.Target).WithMany(a => a.Notifications);
    });
  }
}