namespace Wasko;

public readonly struct ModelUserProfil {
  public readonly required string FirstName { get; init; }
  public readonly required string LastName { get; init; }
  public readonly required string UserName { get; init; }
  public readonly required DateOnly WorkStartDate { get; init; }
  public readonly byte[]? ProfileImage { get; init; }
  public readonly required IEnumerable<string> Roles { get; init; }
}