class StorageBonus
{
  static private string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  static public IEnumerable<ModelBonus> Bonuses = _Bonuses().ToArray();

  static private IEnumerable<ModelBonus> _Bonuses()
  {
    yield return new()
    {
      ID = "e1d178f4-262a-418f-96c1-a5515b9fb23f",
      Bonus = 100,
      BonusDescription = "Za dobre sprawowanie",
      CreatorID = userID("user0"),
      TargetID = userID("user0"),
      BonusRejectionReason = "Wcale nie było dobre",
      ApproverID = userID("admin")
    };
    yield return new()
    {
      ID = "024162d3-6287-4e05-b0ef-91cfe5854dc0",
      Bonus = 100,
      BonusDescription = "Za piękne oczy",
      CreatorID = userID("user0"),
      TargetID = userID("user0"),
    };
    yield return new()
    {
      ID = "07f10e53-1641-415d-9f7e-63e0e8465a83",
      Bonus = 100,
      BonusDescription = "Za produktywność",
      CreatorID = userID("admin"),
      TargetID = userID("user0"),
      ApproverID = userID("admin")
    };
  }
}