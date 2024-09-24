namespace Wasko;

class BuilderChord : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChord>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");

      entity.HasOne(a => a.Creator).WithMany(a => a.CreatedChords)
        .HasForeignKey(a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageChord.Chords);
    });
  }
}