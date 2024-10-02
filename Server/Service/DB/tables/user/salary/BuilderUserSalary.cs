namespace Wasko;

class BuilderUserSalary : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUserSalary>(entity =>
    {
      entity.HasKey(a => new { a.ID, a.Date });

      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(a => a.HourlySalary).HasColumnType("money");

      entity.HasOne(a => a.User).WithMany(a => a.ApprovedSalary)
        .HasForeignKey(a => a.ID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Approver).WithMany(a => a.Salary)
        .HasForeignKey(a => a.ApproverID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.Property(a => a.Date)
        .HasDefaultValueSql("GETDATE()");
#if DEBUG
      entity.HasData(StorageUserSalary.Salaries);
#endif
    });
  }
}