namespace Wasko;

public class BuilderWorkHour : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkHour>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(static a => a.User).WithMany(static a => a.WorkHours)
        .HasForeignKey(static a => a.UserID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Author).WithMany(static a => a.CreatedWorkHours)
        .HasForeignKey(static a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.WorkLocation).WithMany(static a => a.WorkHours)
        .HasForeignKey(static a => a.WorkLocationID)
        .OnDelete(DeleteBehavior.Restrict);

#if DEBUG
      entity.HasData(StorageWorkHour.WorkHours);
#endif
    });
  }
}