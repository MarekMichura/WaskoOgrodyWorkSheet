namespace Wasko;

partial class ServiceUser
{
  public ModelResultUserProfil GetProfil()
  {
    var user = GetCurrentUser();
    if (user is null || user.Profil is null)
    {
      throw new NullReferenceException();
    }

    return new()
    {
      UserName = user.UserName ?? throw new NullReferenceException(),
      WorkStartDate = user.Profil.WorkStartDate,
      FirstName = user.Profil.FirstName,
      LastName = user.Profil.LastName,
      Roles = user.Roles
        .Select(static role => role.Name ?? throw new NullReferenceException())
    };
  }
}