namespace Wasko;

public class BuilderBonus : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelBonus>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(static a => a.Bonus).HasColumnType("money");

      entity.HasOne(static a => a.Target).WithMany(static a => a.UsersBonuses)
        .HasForeignKey(static a => a.TargetID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Creator).WithMany(static a => a.CreatedBonuses)
        .HasForeignKey(static a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Approver).WithMany(static a => a.ApprovedBonuses)
        .HasForeignKey(static a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.Property(static a => a.Date)
        .HasDefaultValueSql("GETDATE()");
#if DEBUG
      entity.HasData(StorageBonus.Bonuses);
#endif
    });
  }
}