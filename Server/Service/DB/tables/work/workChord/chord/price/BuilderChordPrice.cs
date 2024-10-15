namespace Wasko;

public class BuilderChordPrice : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChordPrice>(static entity =>
    {
      entity.Property(static a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(static a => a.Price).HasColumnType("money");

      entity.HasOne(static a => a.Chord).WithMany(static a => a.Prices)
        .HasForeignKey(static a => a.ChordID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(static a => a.Creator).WithMany(static a => a.ChangedChordsPrices)
        .HasForeignKey(static a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageChordPrice.ChordPrices);
    });
  }
}