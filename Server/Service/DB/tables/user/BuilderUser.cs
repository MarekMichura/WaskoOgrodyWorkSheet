namespace Wasko;

class BuilderUser : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUser>(entity =>
    {
      entity.Ignore(x => x.PhoneNumber)
        .Ignore(x => x.PhoneNumberConfirmed)
        .Ignore(x => x.AccessFailedCount)
        .Ignore(x => x.TwoFactorEnabled)
        .Ignore(x => x.LockoutEnabled)
        .Ignore(x => x.LockoutEnd);

      entity.Property(a => a.Id)
        .HasMaxLength(36).IsRequired();

      entity.HasIndex(a => a.UserName).IsUnique();
      entity.Property(a => a.UserName)
        .IsRequired().HasMaxLength(100);

      entity.HasIndex(a => a.NormalizedUserName).IsUnique();
      entity.Property(a => a.NormalizedUserName)
        .IsRequired().HasMaxLength(100);

      entity.HasIndex(a => a.Email).IsUnique();
      entity.Property(a => a.Email)
        .IsRequired().HasMaxLength(100);

      entity.HasIndex(a => a.NormalizedEmail).IsUnique();
      entity.Property(a => a.NormalizedEmail)
        .IsRequired().HasMaxLength(100);

      entity.Property(a => a.EmailConfirmed)
        .IsRequired();

      entity.Property(a => a.PasswordHash)
        .IsRequired().HasMaxLength(84);

      entity.Property(a => a.SecurityStamp)
        .IsRequired().HasMaxLength(36);

      entity.Property(a => a.ConcurrencyStamp)
        .IsRequired().HasMaxLength(36);

      entity.HasMany(x => x.Roles).WithMany(x => x.Users)
        .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageUser.Users);
    });


  }
}