
partial class ServiceUser
{
  public ModelUser? GetCurrentUser()
  {
    var userId = _httpContext.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);
    if (userId != null)
      return _db.Users
        .Include(a => a.Profil)
        .Include(a => a.Roles)
        .FirstOrDefault(u => u.Id == userId);

    return null;
  }
}