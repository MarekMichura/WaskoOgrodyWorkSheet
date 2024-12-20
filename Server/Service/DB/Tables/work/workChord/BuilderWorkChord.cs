namespace Wasko;

public class BuilderWorkChord : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelWorkChord>(static entity => {
      entity.Property(static workChord => workChord.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasOne(static workChord => workChord.Chord)
        .WithMany(static chord => chord.WorkChords)
        .HasForeignKey(static chord => chord.ChordID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static chord => chord.WorkHour)
        .WithMany(static workHours => workHours.Chords)
        .HasForeignKey(static chord => chord.WorkHourID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static chord => chord.Author)
        .WithMany(static user => user.CreatedWorkChords)
        .HasForeignKey(static chord => chord.AuthorID)
        .OnDelete(DeleteBehavior.Restrict);
#if DEBUG
      entity.HasData(StorageWorkChord.WorkChords);
#endif
    });
  }
}