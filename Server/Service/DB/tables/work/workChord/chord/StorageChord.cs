class StorageChord
{
  static private string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  static public IEnumerable<ModelChord> Chords = _Chords().ToArray();
  static private IEnumerable<ModelChord> _Chords()
  {
    yield return new() { ID = "702376ea-7fc7-43b5-98b2-b441aa9dd15c", CreatorID = userID("admin"), Name = "Goły korzeń" };
    yield return new() { ID = "e807d8ac-d694-4f3f-a3f4-22ea83893fef", CreatorID = userID("admin"), Name = "p9/p11/c1,5" };
    yield return new() { ID = "eb275b71-0758-4cb7-aa46-bc2fa1660b7d", CreatorID = userID("admin"), Name = "C2" };
    yield return new() { ID = "dc7ee753-0b67-4753-9216-6ec4d95c1928", CreatorID = userID("admin"), Name = "C3" };
    yield return new() { ID = "464a7dfa-7fe5-403c-8f0d-595e9394191c", CreatorID = userID("admin"), Name = "C5" };
    yield return new() { ID = "366bf5d5-afa4-4fb8-8765-2ee221c1f286", CreatorID = userID("admin"), Name = "Rozchodniki" };
    yield return new() { ID = "e13d87e8-a20a-4846-b49d-019e51264dd8", CreatorID = userID("admin"), Name = "Drzewa 16-18" };
    yield return new() { ID = "0258cfaa-84b4-467f-a582-439d7a704bae", CreatorID = userID("admin"), Name = "Drzewa 18-20" };
  }
}