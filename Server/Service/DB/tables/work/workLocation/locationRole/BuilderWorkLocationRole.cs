namespace Wasko;

public class BuilderWorkLocationRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocationRole>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(static a => a.Locations).WithMany(static a => a.Roles)
        .UsingEntity<ModelWorkLocationRoleWorkLocation>(
          static a => a.HasOne(static b => b.Location)
            .WithMany()
            .HasForeignKey(static a => a.LocationID)
            .OnDelete(DeleteBehavior.Restrict),
          static a => a.HasOne(static b => b.Role)
            .WithMany()
            .HasForeignKey(static a => a.RoleID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasData(StorageWorkLocationRole.WorkLocationRoles);
    });
  }
}