namespace Wasko;

public class BuilderWorkChord : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkChord>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(static a => a.Chord).WithMany(static a => a.WorkChords)
        .HasForeignKey(static a => a.ChordID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.WorkHour).WithMany(static a => a.Chords)
        .HasForeignKey(static a => a.WorkHourID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Author).WithMany(static a => a.CreatedWorkChords)
        .HasForeignKey(static a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);
#if DEBUG
      entity.HasData(StorageWorkChord.WorkChords);
#endif
    });
  }
}