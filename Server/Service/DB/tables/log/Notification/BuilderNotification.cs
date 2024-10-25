
namespace Wasko;

public class BuilderNotification : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelNotification>(static entity =>
    {
      entity.Property(static notification => notification.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasOne(static notification => notification.Target)
        .WithMany(static user => user.Notifications);
    });
  }
}