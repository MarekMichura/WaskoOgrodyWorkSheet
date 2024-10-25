namespace Wasko;

public class BuilderDayOffExpression : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpression>(static entity =>
    {
      entity.HasIndex(static dayOff => dayOff.Order);

      entity.Property(static dayOff => dayOff.Month)
        .HasConversion<int>()
        .HasColumnType("tinyint");

      entity.Property(static dayOff => dayOff.DayOfWeek)
        .HasConversion<int>()
        .HasColumnType("tinyint");

      entity.Property(static dayOff => dayOff.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasMany(static dayOff => dayOff.TargetsUser)
        .WithMany(static user => user.DaysOffExpression)
        .UsingEntity<ModelDayOffExpressionTargetUser>(
          static targetUser => targetUser
            .HasOne(static dayOff => dayOff.Target)
            .WithMany()
            .HasForeignKey(static targetUser => targetUser.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static targetUser => targetUser
            .HasOne(static targetUser => targetUser.DayOff)
            .WithMany()
            .HasForeignKey(static targetUser => targetUser.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasMany(static dayOff => dayOff.TargetsRole)
        .WithMany(static role => role.DaysOffExpressions)
        .UsingEntity<ModelDayOffExpressionTargetRole>(
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
        .WithMany(static user => user.DaysOffExpressionAuthor)
        .HasForeignKey(static dayOff => dayOff.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static dayOff => dayOff.Approver)
        .WithMany(static user => user.DaysOffExpressionApprover)
        .HasForeignKey(static dayOff => dayOff.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageDayOffExpression.DaysOff);
    });
  }
}