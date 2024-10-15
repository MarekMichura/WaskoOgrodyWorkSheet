namespace Wasko;

public class BuilderFound : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelFound>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(static a => a.Founded).HasColumnType("money");

      entity.HasOne(static a => a.Target).WithMany(static a => a.UsersFounded)
        .HasForeignKey(static a => a.TargetID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Creator).WithMany(static a => a.CreatedFounds)
        .HasForeignKey(static a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Approver).WithMany(static a => a.ApprovedFounds)
        .HasForeignKey(static a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);


      entity.Property(static a => a.Date)
        .HasDefaultValueSql("GETDATE()");

#if DEBUG
      entity.HasData(StorageFound.Founds);
#endif
    });
  }
}
