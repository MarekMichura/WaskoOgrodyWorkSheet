namespace Wasko;

class BuilderProfile : IBuilder
{
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelProfil>(entity =>
    {
      entity.Property(a => a.WorkStartDate)
        .HasColumnType("Date")
        .HasDefaultValueSql("getdate()")
        .IsRequired();

      entity.HasOne(a => a.User).WithOne(a => a.Profil)
        .HasForeignKey<ModelProfil>(a => a.ID)
        .OnDelete(DeleteBehavior.Restrict)
        .IsRequired();

      entity.HasData(StorageProfil.Profiles);
    });
  }
}