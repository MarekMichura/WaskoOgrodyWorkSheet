namespace Wasko;

public class BuilderProfile : IBuilder {
  public void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelProfil>(static entity => {
      entity.Property(static profil => profil.WorkStartDate)
        .HasColumnType("Date")
        .HasDefaultValueSql("getdate()")
        .IsRequired();

      entity.HasOne(static profil => profil.User)
        .WithOne(static user => user.Profil)
        .HasForeignKey<ModelProfil>(static profil => profil.ID)
        .OnDelete(DeleteBehavior.Restrict)
        .IsRequired();

      entity.HasData(StorageProfil.Profiles);
    });
  }
}