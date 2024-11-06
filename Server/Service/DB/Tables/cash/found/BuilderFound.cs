namespace Wasko;

public class BuilderFound : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelFound>(static entity => {
      entity.Property(static found => found.ID)
        .HasDefaultValueSql("NewId()");

      entity.Property(static found => found.Founded)
        .HasColumnType("money");

      entity.HasOne(static found => found.Target)
        .WithMany(static user => user.UsersFounded)
        .HasForeignKey(static found => found.TargetID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static found => found.Creator)
        .WithMany(static user => user.CreatedFounds)
        .HasForeignKey(static found => found.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static found => found.Approver)
        .WithMany(static user => user.ApprovedFounds)
        .HasForeignKey(static found => found.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);


      entity.Property(static found => found.Date)
        .HasDefaultValueSql("GETDATE()");

#if DEBUG
      entity.HasData(StorageFound.Founds);
#endif
    });
  }
}
