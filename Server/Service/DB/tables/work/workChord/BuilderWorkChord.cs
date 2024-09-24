namespace Wasko;

class BuilderWorkChord : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkChord>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(a => a.Chord).WithMany(a => a.WorkChords)
        .HasForeignKey(a => a.ChordID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.WorkHour).WithMany(a => a.Chords)
        .HasForeignKey(a => a.WorkHourID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Author).WithMany(a => a.CreatedWorkChords)
        .HasForeignKey(a => a.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageWorkChord.WorkChords);
    });
  }
}