namespace Wasko;

readonly struct ModelInputAuthenticate
{
  public required string Login { get; init; }
  public required string Password { get; init; }
}
