namespace Wasko;

public class BuilderDayOffDate : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDate>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(static a => a.TargetsUser).WithMany(static a => a.DaysOffDate)
        .UsingEntity<ModelDayOffDateTargetUser>(
          static a => a.HasOne(static b => b.Target)
            .WithMany()
            .HasForeignKey(static a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static a => a.HasOne(static b => b.DayOff)
            .WithMany()
            .HasForeignKey(static a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasMany(static a => a.TargetsRole).WithMany(static a => a.DaysOffDates)
        .UsingEntity<ModelDayOffDateTargetRole>(
          static a => a.HasOne(static b => b.Target)
            .WithMany()
            .HasForeignKey(static a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static a => a.HasOne(static b => b.DayOff)
            .WithMany()
            .HasForeignKey(static a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasOne(static a => a.Author).WithMany(static a => a.DaysOffDateAuthor)
        .HasForeignKey(static a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Approver).WithMany(static a => a.DaysOffDateApprover)
        .HasForeignKey(static a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);
#if DEBUG
      entity.HasData(StorageDayOffDate.DaysOff);
#endif
    });
  }
}