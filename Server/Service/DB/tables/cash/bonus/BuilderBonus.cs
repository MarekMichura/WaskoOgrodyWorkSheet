namespace Wasko;

class BuilderBonus : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelBonus>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(a => a.Bonus).HasColumnType("money");


      entity.HasOne(a => a.Target).WithMany(a => a.UsersBonuses)
        .HasForeignKey(a => a.TargetID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Creator).WithMany(a => a.CreatedBonuses)
        .HasForeignKey(a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Approver).WithMany(a => a.ApprovedBonuses)
        .HasForeignKey(a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.Property(a => a.Date)
        .HasDefaultValueSql("GETDATE()");

      entity.HasData(StorageBonus.Bonuses);
    });
  }
}