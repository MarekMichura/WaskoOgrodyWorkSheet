#if DEBUG

namespace Wasko;

class StorageWorkChord
{
  public static readonly ModelWorkChord WorkChord1 = new()
  {
    ID = "6eceacfc-367e-4a83-b4bb-2d6f5f34bd0e",
    Quantity = 40,
    ChordID = StorageChord.Goły,
    AuthorID = StorageUser.Dima,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 3) && a.UserID == StorageUser.Dima).ID
  };

  public static readonly ModelWorkChord WorkChord2 = new()
  {
    ID = "3fe7a838-3fb8-4786-9ac8-4df8815e8f8a",
    Quantity = 55,
    ChordID = StorageChord.p9,
    AuthorID = StorageUser.Dima,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 3) && a.UserID == StorageUser.Dima).ID
  };

  public static readonly ModelWorkChord WorkChord3 = new()
  {
    ID = "466373cb-2d58-4ccc-91f7-3bde8cbb21bc",
    Quantity = 143,
    ChordID = StorageChord.C2,
    AuthorID = StorageUser.Loszka,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 6) && a.UserID == StorageUser.Loszka).ID
  };

  public static readonly ModelWorkChord WorkChord4 = new()
  {
    ID = "f29e2649-1f47-464f-92b7-c1d735b376a7",
    Quantity = 84,
    ChordID = StorageChord.C2,
    AuthorID = StorageUser.Loszka,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 14) && a.UserID == StorageUser.Loszka).ID
  };

  public static readonly ModelWorkChord WorkChord5 = new()
  {
    ID = "71b58aa9-a271-486c-9cda-2deef9c304ee",
    Quantity = 52,
    ChordID = StorageChord.p9,
    AuthorID = StorageUser.Loszka,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 14) && a.UserID == StorageUser.Loszka).ID
  };

  public static readonly ModelWorkChord WorkChord6 = new()
  {
    ID = "cd93ea9d-19fe-4a14-a05f-48b98769036f",
    Quantity = 41,
    ChordID = StorageChord.C5,
    AuthorID = StorageUser.Loszka,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 14) && a.UserID == StorageUser.Loszka).ID
  };

  public static readonly ModelWorkChord WorkChord7 = new()
  {
    ID = "6787d4f2-9cfc-4d45-8c6a-deee6e29d0a2",
    Quantity = 39,
    ChordID = StorageChord.C2,
    AuthorID = StorageUser.Loszka,
    WorkHourID = StorageWorkHour.WorkHours.First(a => a.Date == new DateOnly(2024, 06, 1) && a.UserID == StorageUser.Loszka).ID
  };

  public static readonly IEnumerable<ModelWorkChord> WorkChords =
    [WorkChord1, WorkChord2, WorkChord3, WorkChord4, WorkChord5, WorkChord6, WorkChord7];
}

#endif
