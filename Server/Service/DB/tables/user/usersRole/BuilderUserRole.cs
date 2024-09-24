namespace Wasko;

class BuilderUserRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<IdentityUserRole<string>>(entity =>
    {
      entity.HasOne<ModelUser>().WithMany()
        .HasForeignKey(a => a.UserId)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne<ModelRole>().WithMany()
        .HasForeignKey(a => a.RoleId)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageUsersRole.UsersRoles);
    });
  }
}