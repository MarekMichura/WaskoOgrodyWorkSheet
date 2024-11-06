namespace Wasko;

public class BuilderWorkHour : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkHours>(static entity =>
    {
      entity.Property(static workHours => workHours.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasOne(static workHours => workHours.User)
        .WithMany(static user => user.WorkHours)
        .HasForeignKey(static workHours => workHours.UserID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static workHours => workHours.Author)
        .WithMany(static user => user.CreatedWorkHours)
        .HasForeignKey(static workHours => workHours.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static workHours => workHours.WorkLocation)
        .WithMany(static workLocation => workLocation.WorkHours)
        .HasForeignKey(static workHours => workHours.WorkLocationID)
        .OnDelete(DeleteBehavior.Restrict);

#if DEBUG
      entity.HasData(StorageWorkHour.WorkHours);
#endif
    });
  }
}