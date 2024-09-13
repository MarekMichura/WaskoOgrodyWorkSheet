class ModelResultUserProfil
{
  public required string FirstName { get; set; }
  public required string LastName { get; set; }
  public required string UserName { get; set; }
  public required DateOnly WorkStartDate { get; set; }
  public byte[]? ProfileImage { get; set; }
  public required IEnumerable<string> Roles { get; set; }
}