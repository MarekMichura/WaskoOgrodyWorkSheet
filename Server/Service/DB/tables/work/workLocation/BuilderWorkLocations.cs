namespace Wasko;

public class BuilderWorkLocations : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocation>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(static a => a.Targets).WithMany(static a => a.WorkLocations)
        .UsingEntity<ModelWorkLocationTargetRole>(
          static a => a.HasOne(static b => b.Role)
            .WithMany()
            .HasForeignKey(static a => a.RoleID)
            .OnDelete(DeleteBehavior.Restrict),
          static a => a.HasOne(static b => b.WorkLocation)
            .WithMany()
            .HasForeignKey(static a => a.WorkLocationID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasData(StorageWorkLocations.WorkLocations);
    });
  }
}