class ModelRole : IdentityRole
{
  public virtual ICollection<ModelUser> Users { get; set; } = [];
}