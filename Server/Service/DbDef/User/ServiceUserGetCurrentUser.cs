namespace Wasko;

partial class ServiceUser
{
  public string? GetCurrentUserID() =>
     _httpContext.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);

  public ModelUser? GetCurrentUser()
  {
    var userId = GetCurrentUserID();
    if (userId != null)
    {
      return _db.Users
        .Include(user => user.Profil)
        .Include(user => user.Roles)
        .FirstOrDefault(user => user.Id == userId);
    }

    return null;
  }
}