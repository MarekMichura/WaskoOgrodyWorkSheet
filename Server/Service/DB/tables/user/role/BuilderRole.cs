class BuilderRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelRole>(entity =>
    {
      entity.Property(a => a.Id)
        .HasMaxLength(36)
        .IsRequired();

      entity.Property(a => a.ConcurrencyStamp)
        .IsRequired().IsUnicode();

      entity.Property(a => a.Name)
        .IsRequired().IsUnicode();

      entity.HasOne(a => a.Author).WithMany(a => a.CreatedRoles)
        .HasForeignKey(a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasMany(a => a.Users).WithMany(a => a.Roles)
        .UsingEntity<IdentityUserRole<string>>();

      entity.HasData(StorageRole.Roles);
    });
  }
}