namespace Wasko;

public class BuilderWorkLocations : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkLocation>(static entity => {
      entity.Property(static workLocation => workLocation.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasMany(static workLocation => workLocation.Targets)
        .WithMany(static role => role.WorkLocations)
        .UsingEntity<ModelWorkLocationTargetRole>(
          static targetRole => targetRole
            .HasOne(static targetRole => targetRole.Role)
            .WithMany()
            .HasForeignKey(static targetRole => targetRole.RoleID)
            .OnDelete(DeleteBehavior.Restrict),
          static targetRole => targetRole
            .HasOne(static targetRole => targetRole.WorkLocation)
            .WithMany()
            .HasForeignKey(static targetRole => targetRole.WorkLocationID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasData(StorageWorkLocations.WorkLocations);
    });
  }
}