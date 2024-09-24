namespace Wasko;

class BuilderWorkHour : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkHour>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(a => a.User).WithMany(a => a.WorkHours)
        .HasForeignKey(a => a.UserID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Author).WithMany(a => a.CreatedWorkHours)
        .HasForeignKey(a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.WorkLocation).WithMany(a => a.WorkHours)
        .HasForeignKey(a => a.WorkLocationID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageWorkHour.WorkHours);
    });
  }
}