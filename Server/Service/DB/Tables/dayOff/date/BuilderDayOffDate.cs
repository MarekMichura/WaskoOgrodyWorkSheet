namespace Wasko;

public class BuilderDayOffDate : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffDate>(static entity =>
    {
      entity.Property(static dayOff => dayOff.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasMany(static dayOff => dayOff.TargetsUser)
        .WithMany(static user => user.DaysOffDate)
        .UsingEntity<ModelDayOffDateTargetUser>(
          static targetUser => targetUser
            .HasOne(static targetUser => targetUser.Target)
            .WithMany()
            .HasForeignKey(static targetUser => targetUser.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static targetUser => targetUser
            .HasOne(static targetUser => targetUser.DayOff)
            .WithMany()
            .HasForeignKey(static targetUser => targetUser.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasMany(static dayOff => dayOff.TargetsRole)
        .WithMany(static role => role.DaysOffDates)
        .UsingEntity<ModelDayOffDateTargetRole>(
          static targetRole => targetRole
            .HasOne(static targetRole => targetRole.Target)
            .WithMany()
            .HasForeignKey(static targetRole => targetRole.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static targetRole => targetRole
            .HasOne(static targetRole => targetRole.DayOff)
            .WithMany()
            .HasForeignKey(static targetRole => targetRole.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasOne(static dayOff => dayOff.Author)
        .WithMany(static user => user.DaysOffDateAuthor)
        .HasForeignKey(static dayOff => dayOff.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static dayOff => dayOff.Approver)
        .WithMany(static user => user.DaysOffDateApprover)
        .HasForeignKey(static dayOff => dayOff.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);
#if DEBUG
      entity.HasData(StorageDayOffDate.DaysOff);
#endif
    });
  }
}