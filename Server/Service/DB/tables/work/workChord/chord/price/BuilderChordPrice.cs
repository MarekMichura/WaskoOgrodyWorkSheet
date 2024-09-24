namespace Wasko;

class BuilderChordPrice : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelChordPrice>(entity =>
    {
      entity.Property(a => a.ID).HasDefaultValueSql("NewId()");
      entity.Property(a => a.Price).HasColumnType("money");

      entity.HasOne(a => a.Chord).WithMany(a => a.Prices)
        .HasForeignKey(a => a.ChordID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasOne(a => a.Creator).WithMany(a => a.ChangedChordsPrices)
        .HasForeignKey(a => a.CreatorID)
        .OnDelete(DeleteBehavior.Restrict);

      entity.HasData(StorageChordPrice.ChordPrices);
    });
  }
}