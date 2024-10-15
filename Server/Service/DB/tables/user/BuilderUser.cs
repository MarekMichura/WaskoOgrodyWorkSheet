namespace Wasko;

public class BuilderUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUser>(static entity =>
    {
      entity.Ignore(static x => x.PhoneNumber)
        .Ignore(static x => x.PhoneNumberConfirmed)
        .Ignore(static x => x.AccessFailedCount)
        .Ignore(static x => x.TwoFactorEnabled)
        .Ignore(static x => x.LockoutEnabled)
        .Ignore(static x => x.LockoutEnd);

      entity.Property(static a => a.Id)
        .HasMaxLength(36).IsRequired();

      entity.HasIndex(static a => a.UserName).IsUnique();
      entity.Property(static a => a.UserName)
        .IsRequired().HasMaxLength(100);

      entity.HasIndex(static a => a.NormalizedUserName).IsUnique();
      entity.Property(static a => a.NormalizedUserName)
        .IsRequired().HasMaxLength(100);

      entity.HasIndex(static a => a.Email).IsUnique();
      entity.Property(static a => a.Email)
        .IsRequired().HasMaxLength(100);

      entity.HasIndex(static a => a.NormalizedEmail).IsUnique();
      entity.Property(static a => a.NormalizedEmail)
        .IsRequired().HasMaxLength(100);

      entity.Property(static a => a.EmailConfirmed)
        .IsRequired();

      entity.Property(static a => a.PasswordHash)
        .IsRequired().HasMaxLength(84);

      entity.Property(static a => a.SecurityStamp)
        .IsRequired().HasMaxLength(36);

      entity.Property(static a => a.ConcurrencyStamp)
        .IsRequired().HasMaxLength(36);

      entity.HasMany(static x => x.Roles).WithMany(static x => x.Users)
        .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageUser.Users);
    });


  }
}