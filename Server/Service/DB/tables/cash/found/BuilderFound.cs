namespace Wasko;

class BuilderFound : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelFound>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(a => a.Founded).HasColumnType("money");

      entity.HasOne(a => a.Target).WithMany(a => a.UsersFounded)
        .HasForeignKey(a => a.TargetID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Creator).WithMany(a => a.CreatedFounds)
        .HasForeignKey(a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Approver).WithMany(a => a.ApprovedFounds)
        .HasForeignKey(a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);


      entity.Property(a => a.Date)
        .HasDefaultValueSql("GETDATE()");

#if DEBUG
      entity.HasData(StorageFound.Founds);
#endif
    });
  }
}
