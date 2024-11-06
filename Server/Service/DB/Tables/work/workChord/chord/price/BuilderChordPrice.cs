namespace Wasko;

public class BuilderChordPrice : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChordPrice>(static entity => {
      entity.Property(static chordPrice => chordPrice.ID)
        .HasDefaultValueSql("NewId()");

      entity.Property(static chordPrice => chordPrice.Price)
        .HasColumnType("money");

      entity.HasOne(static chordPrice => chordPrice.Chord)
        .WithMany(static chord => chord.Prices)
        .HasForeignKey(static chordPrice => chordPrice.ChordID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static chordPrice => chordPrice.Creator)
        .WithMany(static user => user.ChangedChordsPrices)
        .HasForeignKey(static chordPrice => chordPrice.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageChordPrice.ChordPrices);
    });
  }
}