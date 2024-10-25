namespace Wasko;

public class BuilderBonus : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelBonus>(static entity =>
    {
      entity.Property(static bonus => bonus.ID)
        .HasDefaultValueSql("NewId()");

      entity.Property(static bonus => bonus.Bonus)
        .HasColumnType("money");

      entity.HasOne(static bonus => bonus.Target)
        .WithMany(static user => user.UsersBonuses)
        .HasForeignKey(static bonus => bonus.TargetID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static bonus => bonus.Creator)
        .WithMany(static user => user.CreatedBonuses)
        .HasForeignKey(static bonus => bonus.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static bonus => bonus.Approver)
        .WithMany(static user => user.ApprovedBonuses)
        .HasForeignKey(static bonus => bonus.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.Property(static bonus => bonus.Date)
        .HasDefaultValueSql("GETDATE()");
#if DEBUG
      entity.HasData(StorageBonus.Bonuses);
#endif
    });
  }
}