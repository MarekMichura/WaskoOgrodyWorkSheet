namespace Wasko;

public class BuilderUserSalary : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUserSalary>(static entity =>
    {
      entity.HasKey(static a => new { a.ID, a.Date });

      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(static a => a.HourlySalary).HasColumnType("money");

      entity.HasOne(static a => a.User).WithMany(static a => a.ApprovedSalary)
        .HasForeignKey(static a => a.ID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Approver).WithMany(static a => a.Salary)
        .HasForeignKey(static a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.Property(static a => a.Date)
        .HasDefaultValueSql("GETDATE()");
#if DEBUG
      entity.HasData(StorageUserSalary.Salaries);
#endif
    });
  }
}