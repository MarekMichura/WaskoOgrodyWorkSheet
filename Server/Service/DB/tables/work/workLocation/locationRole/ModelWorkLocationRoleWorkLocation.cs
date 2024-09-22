class ModelWorkLocationRoleWorkLocation
{
  [Required]
  [StringLength(36)]
  public required string RoleID { get; set; }
  public virtual ModelWorkLocationRole? Role { get; set; }

  [Required]
  [StringLength(36)]
  public required string LocationID { get; set; }
  public virtual ModelWorkLocation? Location { get; set; }
}