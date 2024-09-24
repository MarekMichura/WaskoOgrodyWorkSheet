namespace Wasko;

class StorageChordPrice
{
  static private string chordID(string name) =>
    StorageChord.Chords.First(a => a.Name == name).ID;

  static private string userID(string name) =>
      StorageUser.Users.First(a => a.UserName == name).Id;

  static public IEnumerable<ModelChordPrice> ChordPrices = _ChordPrices().ToArray();
  static private IEnumerable<ModelChordPrice> _ChordPrices()
  {
    yield return new()
    {
      ID = "e2f11f1f-ed0a-4007-97a2-f3ba1ee78150",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("Goły korzeń"),
      Price = 1m,
    };
    yield return new()
    {
      ID = "6d743df0-601f-481b-bafe-7bd70f0212b0",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("p9"),
      Price = 1.1m,
    };
    yield return new()
    {
      ID = "17deb4e8-8a65-47b9-9b24-4717049a46b5",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("p11"),
      Price = 1.1m,
    };
    yield return new()
    {
      ID = "ed53c2cf-a9f4-419b-9711-40cda1920588",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("c1,5"),
      Price = 1.1m,
    };
    yield return new()
    {
      ID = "03d72c0a-8769-4c9e-852e-7f8abee42fa6",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("C2"),
      Price = 2m,
    };
    yield return new()
    {
      ID = "30ec8d82-eeb4-4bbd-ab8c-97234a8b3436",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("C3"),
      Price = 2.5m,
    };
    yield return new()
    {
      ID = "c0bc0799-67f2-48c6-a341-ec6664d86b9e",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("C5"),
      Price = 3m,
    };
    yield return new()
    {
      ID = "7f7fa0d4-cc4c-46a6-a89b-a1806018f99c",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("Rozchodniki"),
      Price = 0.2m,
    };
    yield return new()
    {
      ID = "6ac1359a-8db5-4bb3-8bf6-1939e3b76d3f",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("Drzewa 16-18"),
      Price = 35m,
    };
    yield return new()
    {
      ID = "4b875b61-1fe5-4d80-b8ac-025f525f76dd",
      CreatorID = userID("admin"),
      Date = new DateOnly(2000, 1, 1),
      ChordID = chordID("Drzewa 18-20"),
      Price = 50m,
    };
  }
}