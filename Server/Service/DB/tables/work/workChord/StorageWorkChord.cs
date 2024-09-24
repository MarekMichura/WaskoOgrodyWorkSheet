namespace Wasko;

class StorageWorkChord
{
  static public IEnumerable<ModelWorkChord> WorkChords = _WorkChords();
  static private IEnumerable<ModelWorkChord> _WorkChords()
  {
    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new()
    {
      ID = "6eceacfc-367e-4a83-b4bb-2d6f5f34bd0e",
      Quantity = 40,
      ChordID = StorageChord.getID("Goły korzeń"),
      AuthorID = StorageUser.getID("Dima"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 3), "Dima"),
    };
    yield return new()
    {
      ID = "3fe7a838-3fb8-4786-9ac8-4df8815e8f8a",
      Quantity = 55,
      ChordID = StorageChord.getID("p9"),
      AuthorID = StorageUser.getID("Dima"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 3), "Dima"),
    };
    yield return new()
    {
      ID = "466373cb-2d58-4ccc-91f7-3bde8cbb21bc",
      Quantity = 143,
      ChordID = StorageChord.getID("C2"),
      AuthorID = StorageUser.getID("Loszka"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 6), "Loszka"),
    };
    yield return new()
    {
      ID = "f29e2649-1f47-464f-92b7-c1d735b376a7",
      Quantity = 84,
      ChordID = StorageChord.getID("C2"),
      AuthorID = StorageUser.getID("Loszka"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 14), "Loszka"),
    };
    yield return new()
    {
      ID = "71b58aa9-a271-486c-9cda-2deef9c304ee",
      Quantity = 52,
      ChordID = StorageChord.getID("p9"),
      AuthorID = StorageUser.getID("Loszka"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 14), "Loszka"),
    };
    yield return new()
    {
      ID = "cd93ea9d-19fe-4a14-a05f-48b98769036f",
      Quantity = 41,
      ChordID = StorageChord.getID("C5"),
      AuthorID = StorageUser.getID("Loszka"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 14), "Loszka"),
    };
    yield return new()
    {
      ID = "6787d4f2-9cfc-4d45-8c6a-deee6e29d0a2",
      Quantity = 39,
      ChordID = StorageChord.getID("C2"),
      AuthorID = StorageUser.getID("Loszka"),
      WorkHourID = StorageWorkHour.getID(new DateOnly(2024, 06, 1), "Loszka"),
    };
  }
}