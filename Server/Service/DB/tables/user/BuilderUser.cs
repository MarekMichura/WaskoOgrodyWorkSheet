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
        .HasMaxLength(36)
        .IsRequired();

      entity.Property(a => a.UserName)
        .IsRequired().IsUnicode();

      entity.Property(a => a.NormalizedUserName)
        .IsRequired().IsUnicode();

      entity.Property(a => a.Email)
        .IsRequired().IsUnicode();

      entity.Property(a => a.NormalizedEmail)
        .IsRequired().IsUnicode();

      entity.Property(a => a.EmailConfirmed)
        .IsRequired();

      entity.Property(a => a.PasswordHash)
        .IsRequired();

      entity.Property(a => a.SecurityStamp)
        .IsRequired();

      entity.Property(a => a.ConcurrencyStamp)
        .IsRequired();

      entity.HasMany(x => x.Roles).WithMany(x => x.Users)
       .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageUser.Users);
    });


  }
}