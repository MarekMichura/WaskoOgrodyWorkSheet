namespace Wasko;

public class BuilderProfile : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelProfil>(static entity =>
    {
      entity.Property(static a => a.WorkStartDate)
        .HasColumnType("Date")
        .HasDefaultValueSql("getdate()")
        .IsRequired();

      entity.HasOne(static a => a.User).WithOne(static a => a.Profil)
        .HasForeignKey<ModelProfil>(static a => a.ID)
        .OnDelete(DeleteBehavior.Restrict)
        .IsRequired();

      entity.HasData(StorageProfil.Profiles);
    });
  }
}