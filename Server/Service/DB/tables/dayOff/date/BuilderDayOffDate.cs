namespace Wasko;

class BuilderDayOffDate : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDate>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(a => a.TargetsUser).WithMany(a => a.DaysOffDate)
        .UsingEntity<ModelDayOffDateTargetUser>(
          a => a.HasOne(b => b.Target)
            .WithMany()
            .HasForeignKey(a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          a => a.HasOne(b => b.DayOff)
            .WithMany()
            .HasForeignKey(a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasMany(a => a.TargetsRole).WithMany(a => a.DaysOffDates)
        .UsingEntity<ModelDayOffDateTargetRole>(
          a => a.HasOne(b => b.Target)
            .WithMany()
            .HasForeignKey(a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          a => a.HasOne(b => b.DayOff)
            .WithMany()
            .HasForeignKey(a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasOne(a => a.Author).WithMany(a => a.DaysOffDateAuthor)
        .HasForeignKey(a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Approver).WithMany(a => a.DaysOffDateApprover)
        .HasForeignKey(a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageDayOffDate.DaysOff);
    });
  }
}