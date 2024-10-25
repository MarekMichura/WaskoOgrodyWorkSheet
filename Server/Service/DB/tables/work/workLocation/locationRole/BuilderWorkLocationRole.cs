namespace Wasko;

public class BuilderWorkLocationRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocationRole>(static entity =>
    {
      entity.Property(static workLocationRole => workLocationRole.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(static workLocationRole => workLocationRole.Locations)
        .WithMany(static workLocation => workLocation.Roles)
        .UsingEntity<ModelWorkLocationRoleWorkLocation>(
          static targetLocation => targetLocation
            .HasOne(static targetLocation => targetLocation.Location)
            .WithMany()
            .HasForeignKey(static targetLocation => targetLocation.LocationID)
            .OnDelete(DeleteBehavior.Restrict),
          static targetLocation => targetLocation
            .HasOne(static targetLocation => targetLocation.Role)
            .WithMany()
            .HasForeignKey(static targetLocation => targetLocation.RoleID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasData(StorageWorkLocationRole.WorkLocationRoles);
    });
  }
}