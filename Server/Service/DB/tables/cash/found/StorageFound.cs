class StorageFound
{
  static private string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  static public IEnumerable<ModelFound> Founds = _Founds().ToArray();

  static private IEnumerable<ModelFound> _Founds()
  {
    yield return new()
    {
      ID = "8a422c8b-7ddc-4020-9f83-d5c8c7f7b400",
      CreatorID = userID("user0"),
      TargetID = userID("user0"),
      FoundDescription = "kupiłem xxx",
      Founded = 50
    };
    yield return new()
    {
      ID = "39a1b43f-3920-4c90-8ec3-311350c8aeaa",
      Founded = 50,
      CreatorID = userID("user0"),
      TargetID = userID("user0"),
      ApproverID = userID("admin"),
      FoundDescription = "kupiłem obiad dla pracowników",
      FoundRejectionReason = "nie pozwoliłem na to"
    };
    yield return new()
    {
      ID = "85dfe3ef-bbd7-461e-a197-078b5fdbcd31",
      Founded = 50,
      CreatorID = userID("admin"),
      TargetID = userID("user0"),
      ApproverID = userID("admin"),
      FoundDescription = "Za paliwo",
    };
  }
}