namespace Wasko;

class BuilderWorkLocations : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocation>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(a => a.Targets).WithMany(a => a.WorkLocations)
        .UsingEntity<ModelWorkLocationTargetRole>(
          a => a.HasOne(b => b.Role)
            .WithMany()
            .HasForeignKey(a => a.RoleID)
            .OnDelete(DeleteBehavior.Restrict),
          a => a.HasOne(b => b.WorkLocation)
            .WithMany()
            .HasForeignKey(a => a.WorkLocationID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasData(StorageWorkLocations.WorkLocations);
    });
  }
}