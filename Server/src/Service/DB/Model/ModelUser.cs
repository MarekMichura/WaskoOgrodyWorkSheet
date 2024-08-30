class ModelUser : IdentityUser
{
  public virtual ModelProfil? Profil { get; set; }
  public virtual ICollection<ModelDayOff> DaysOff { get; set; } = [];
  public virtual ICollection<ModelWorkDay> WorkDays { get; set; } = [];
  public virtual ICollection<ModelCash> Cashes { get; set; } = [];
  public virtual ICollection<ModelRole> Roles { get; set; } = [];

  public static void CreateModel(ModelBuilder builder)
  {
    builder.Entity<ModelUser>()
      .Ignore(x => x.PhoneNumber)
      .Ignore(x => x.PhoneNumberConfirmed)
      .Ignore(x => x.AccessFailedCount)
      .Ignore(x => x.TwoFactorEnabled)
      .Ignore(x => x.LockoutEnabled)
      .Ignore(x => x.LockoutEnd)
      .HasData(StorageUser.Users);

    builder.Entity<ModelUser>()
      .HasMany(x => x.Roles)
      .WithMany(x => x.Users)
      .UsingEntity<IdentityUserRole<string>>();

    builder.Entity<ModelRole>()
      .HasData(StorageRole.Roles);

    builder.Entity<IdentityUserRole<string>>()
      .HasData(StorageUsersRoles.UsersRoles);
  }
}