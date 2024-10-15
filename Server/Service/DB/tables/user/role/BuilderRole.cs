namespace Wasko;

public class BuilderRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelRole>(static entity =>
    {
      entity.Property(static a => a.Id)
        .HasMaxLength(36)
        .IsRequired();

      entity.Property(static a => a.ConcurrencyStamp)
        .IsRequired();

      entity.HasIndex(static a => a.Name).IsUnique();
      entity.Property(static a => a.Name)
        .IsRequired();

      entity.HasOne(static a => a.Author).WithMany(static a => a.CreatedRoles)
        .HasForeignKey(static a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasMany(static a => a.Users).WithMany(static a => a.Roles)
        .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageRole.Roles);
    });
  }
}