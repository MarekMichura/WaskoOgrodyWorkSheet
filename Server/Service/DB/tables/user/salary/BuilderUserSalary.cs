namespace Wasko;

public class BuilderUserSalary : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUserSalary>(static entity =>
    {
      entity.HasKey(static salary => new { salary.ID, salary.Date });

      entity.Property(static salary => salary.ID).HasDefaultValueSql("NewId()");
      entity.Property(static salary => salary.HourlySalary).HasColumnType("money");

      entity.HasOne(static salary => salary.User)
        .WithMany(static user => user.ApprovedSalary)
        .HasForeignKey(static salary => salary.ID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static salary => salary.Approver)
        .WithMany(static user => user.Salary)
        .HasForeignKey(static salary => salary.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.Property(static salary => salary.Date)
        .HasDefaultValueSql("GETDATE()");
#if DEBUG
      entity.HasData(StorageUserSalary.Salaries);
#endif
    });
  }
}