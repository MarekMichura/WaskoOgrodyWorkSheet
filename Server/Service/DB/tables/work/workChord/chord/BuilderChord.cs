namespace Wasko;

public class BuilderChord : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChord>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(static a => a.Creator).WithMany(static a => a.CreatedChords)
        .HasForeignKey(static a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageChord.Chords);
    });
  }
}