namespace Wasko;

public class BuilderRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelRole>(static entity =>
    {
      entity.Property(static role => role.Id)
        .HasMaxLength(36)
        .IsRequired();

      entity.Property(static role => role.ConcurrencyStamp)
        .IsRequired();

      entity.HasIndex(static role => role.Name)
        .IsUnique();

      entity.Property(static role => role.Name)
        .IsRequired();

      entity.HasOne(static role => role.Author)
        .WithMany(static user => user.CreatedRoles)
        .HasForeignKey(static role => role.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasMany(static role => role.Users)
        .WithMany(static user => user.Roles)
        .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageRole.Roles);
    });
  }
}