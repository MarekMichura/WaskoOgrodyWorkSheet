namespace Wasko;

public class BuilderUserRole : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<IdentityUserRole<string>>(static entity =>
    {
      entity.HasOne<ModelUser>().WithMany()
        .HasForeignKey(static a => a.UserId)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne<ModelRole>().WithMany()
        .HasForeignKey(static a => a.RoleId)
        .OnDelete(DeleteBehavior.Restrict);
#if DEBUG
      entity.HasData(StorageUsersRole.UsersRoles);
#endif
    });
  }
}