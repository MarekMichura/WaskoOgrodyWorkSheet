namespace Wasko;

public class BuilderDayOffExpression : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpression>(static entity =>
    {
      entity.HasIndex(static a => a.Order);

      entity.Property(static a => a.Month)
        .HasConversion<int>().HasColumnType("tinyint");

      entity.Property(static a => a.DayOfWeek)
        .HasConversion<int>().HasColumnType("tinyint");

      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(static a => a.TargetsUser).WithMany(static a => a.DaysOffExpression)
        .UsingEntity<ModelDayOffExpressionTargetUser>(
          static a => a.HasOne(static b => b.Target)
            .WithMany()
            .HasForeignKey(static a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static a => a.HasOne(static b => b.DayOff)
            .WithMany()
            .HasForeignKey(static a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasMany(static a => a.TargetsRole).WithMany(static a => a.DaysOffExpressions)
        .UsingEntity<ModelDayOffExpressionTargetRole>(
          static a => a.HasOne(static b => b.Target)
            .WithMany()
            .HasForeignKey(static a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          static a => a.HasOne(static b => b.DayOff)
            .WithMany()
            .HasForeignKey(static a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasOne(static a => a.Author).WithMany(static a => a.DaysOffExpressionAuthor)
        .HasForeignKey(static a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Approver).WithMany(static a => a.DaysOffExpressionApprover)
        .HasForeignKey(static a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageDayOffExpression.DaysOff);
    });
  }
}