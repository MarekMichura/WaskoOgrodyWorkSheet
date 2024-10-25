namespace Wasko;

public class ModelUser : IdentityUser
{
  [Required]
  public bool Active { get; set; } = true;

  // ============================= user ===================== 
  public virtual ModelProfil? Profil { get; set; }
  public virtual ICollection<ModelRole> Roles { get; set; } = [];
  public virtual ICollection<ModelRole> CreatedRoles { get; set; } = [];
  public virtual ICollection<ModelUserSalary> Salary { get; set; } = [];
  public virtual ICollection<ModelUserSalary> ApprovedSalary { get; set; } = [];
  // ============================= days off =================
  public virtual ICollection<ModelDayOffDate> DaysOffDate { get; set; } = [];
  public virtual ICollection<ModelDayOffDate> DaysOffDateAuthor { get; set; } = [];
  public virtual ICollection<ModelDayOffDate> DaysOffDateApprover { get; set; } = [];

  public virtual ICollection<ModelDayOffExpression> DaysOffExpression { get; set; } = [];
  public virtual ICollection<ModelDayOffExpression> DaysOffExpressionAuthor { get; set; } = [];
  public virtual ICollection<ModelDayOffExpression> DaysOffExpressionApprover { get; set; } = [];
  // ============================= Bonus ====================
  public virtual ICollection<ModelBonus> UsersBonuses { get; set; } = [];
  public virtual ICollection<ModelBonus> CreatedBonuses { get; set; } = [];
  public virtual ICollection<ModelBonus> ApprovedBonuses { get; set; } = [];
  // ============================= Found ====================
  public virtual ICollection<ModelFound> UsersFounded { get; set; } = [];
  public virtual ICollection<ModelFound> CreatedFounds { get; set; } = [];
  public virtual ICollection<ModelFound> ApprovedFounds { get; set; } = [];

  // ============================= Work hours ===============
  public virtual ICollection<ModelWorkHours> WorkHours { get; set; } = [];
  public virtual ICollection<ModelWorkHours> CreatedWorkHours { get; set; } = [];

  // ============================= Chords ===================
  public virtual ICollection<ModelChordPrice> ChangedChordsPrices { get; set; } = [];
  public virtual ICollection<ModelChord> CreatedChords { get; set; } = [];
  public virtual ICollection<ModelWorkChord> CreatedWorkChords { get; set; } = [];
  // ============================= Notification==============
  public virtual ICollection<ModelNotification> Notifications { get; set; } = [];
}