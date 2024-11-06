namespace Wasko;

public class BuilderChord : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChord>(static entity => {
      entity.Property(static chord => chord.ID)
        .HasDefaultValueSql("NewId()");

      entity.HasOne(static chord => chord.Creator)
        .WithMany(static user => user.CreatedChords)
        .HasForeignKey(static chord => chord.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageChord.Chords);
    });
  }
}