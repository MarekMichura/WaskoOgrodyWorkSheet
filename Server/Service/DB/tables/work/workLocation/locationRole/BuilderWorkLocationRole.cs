namespace Wasko;

class BuilderWorkLocationRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocationRole>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(a => a.Locations).WithMany(a => a.Roles)
        .UsingEntity<ModelWorkLocationRoleWorkLocation>(
          a => a.HasOne(b => b.Location)
            .WithMany()
            .HasForeignKey(a => a.LocationID)
            .OnDelete(DeleteBehavior.Restrict),
          a => a.HasOne(b => b.Role)
            .WithMany()
            .HasForeignKey(a => a.RoleID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasData(StorageWorkLocationRole.WorkLocationRoles);
    });
  }
}