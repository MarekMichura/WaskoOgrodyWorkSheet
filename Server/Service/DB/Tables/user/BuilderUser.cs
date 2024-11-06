namespace Wasko;

public class BuilderUser : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUser>(static entity => {
      entity.Ignore(static user => user.PhoneNumber)
        .Ignore(static user => user.PhoneNumberConfirmed)
        .Ignore(static user => user.AccessFailedCount)
        .Ignore(static user => user.TwoFactorEnabled)
        .Ignore(static user => user.LockoutEnabled)
        .Ignore(static user => user.LockoutEnd);

      entity.Property(static user => user.Id)
        .HasMaxLength(36)
        .IsRequired();

      entity.HasIndex(static user => user.UserName)
        .IsUnique();
      entity.Property(static user => user.UserName)
        .IsRequired()
        .HasMaxLength(100);

      entity.HasIndex(static user => user.NormalizedUserName)
        .IsUnique();

      entity.Property(static user => user.NormalizedUserName)
        .IsRequired()
        .HasMaxLength(100);

      entity.HasIndex(static user => user.Email)
        .IsUnique();

      entity.Property(static user => user.Email)
        .IsRequired()
        .HasMaxLength(100);

      entity.HasIndex(static user => user.NormalizedEmail)
        .IsUnique();

      entity.Property(static user => user.NormalizedEmail)
        .IsRequired()
        .HasMaxLength(100);

      entity.Property(static user => user.EmailConfirmed)
        .IsRequired();

      entity.Property(static user => user.PasswordHash)
        .IsRequired()
        .HasMaxLength(84);

      entity.Property(static user => user.SecurityStamp)
        .IsRequired()
        .HasMaxLength(36);

      entity.Property(static user => user.ConcurrencyStamp)
        .IsRequired()
        .HasMaxLength(36);

      entity.HasMany(static user => user.Roles)
        .WithMany(static role => role.Users)
        .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageUser.Users);
    });


  }
}