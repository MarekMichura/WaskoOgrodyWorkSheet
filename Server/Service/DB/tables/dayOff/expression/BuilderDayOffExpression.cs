class BuilderDayOffExpression : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelDayOffExpression>(entity =>
    {
      entity.HasIndex(a => a.Order);

      entity.Property(a => a.Month)
        .HasConversion<int>().HasColumnType("tinyint");

      entity.Property(a => a.DayOfWeek)
        .HasConversion<int>().HasColumnType("tinyint");

      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasMany(a => a.TargetsUser).WithMany(a => a.DaysOffExpression)
        .UsingEntity<ModelDayOffExpressionTargetUser>(
          a => a.HasOne(b => b.Target)
            .WithMany()
            .HasForeignKey(a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          a => a.HasOne(b => b.DayOff)
            .WithMany()
            .HasForeignKey(a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasMany(a => a.TargetsRole).WithMany(a => a.DaysOffExpressions)
        .UsingEntity<ModelDayOffExpressionTargetRole>(
          a => a.HasOne(b => b.Target)
            .WithMany()
            .HasForeignKey(a => a.TargetID)
            .OnDelete(DeleteBehavior.Restrict),
          a => a.HasOne(b => b.DayOff)
            .WithMany()
            .HasForeignKey(a => a.DayOffID)
            .OnDelete(DeleteBehavior.Restrict));

      entity.HasOne(a => a.Author).WithMany(a => a.DaysOffExpressionAuthor)
        .HasForeignKey(a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Approver).WithMany(a => a.DaysOffExpressionApprover)
        .HasForeignKey(a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageDayOffExpression.DaysOff);
    });
  }
}