namespace Wasko;

public class StorageChordPrice {
  public static readonly ModelChordPrice ChordPrice1 = new() {
    ID = "e2f11f1f-ed0a-4007-97a2-f3ba1ee78150",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.Goły,
    Price = 1m
  };

  public static readonly ModelChordPrice ChordPrice2 = new() {
    ID = "6d743df0-601f-481b-bafe-7bd70f0212b0",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.p9,
    Price = 1.1m
  };

  public static readonly ModelChordPrice ChordPrice3 = new() {
    ID = "17deb4e8-8a65-47b9-9b24-4717049a46b5",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.p11,
    Price = 1.1m
  };

  public static readonly ModelChordPrice ChordPrice4 = new() {
    ID = "ed53c2cf-a9f4-419b-9711-40cda1920588",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.c1,
    Price = 1.1m
  };

  public static readonly ModelChordPrice ChordPrice5 = new() {
    ID = "03d72c0a-8769-4c9e-852e-7f8abee42fa6",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.C2,
    Price = 2m
  };

  public static readonly ModelChordPrice ChordPrice6 = new() {
    ID = "30ec8d82-eeb4-4bbd-ab8c-97234a8b3436",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.C3,
    Price = 2.5m
  };

  public static readonly ModelChordPrice ChordPrice7 = new() {
    ID = "c0bc0799-67f2-48c6-a341-ec6664d86b9e",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.C5,
    Price = 3m
  };

  public static readonly ModelChordPrice ChordPrice8 = new() {
    ID = "7f7fa0d4-cc4c-46a6-a89b-a1806018f99c",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.Rozchodniki,
    Price = 0.2m
  };

  public static readonly ModelChordPrice ChordPrice9 = new() {
    ID = "6ac1359a-8db5-4bb3-8bf6-1939e3b76d3f",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.Drzewa16,
    Price = 35m
  };

  public static readonly ModelChordPrice ChordPrice10 = new() {
    ID = "4b875b61-1fe5-4d80-b8ac-025f525f76dd",
    CreatorID = StorageUser.Admin,
    Date = new DateOnly(2000, 1, 1),
    ChordID = StorageChord.Drzewa18,
    Price = 50m
  };

  public static readonly ModelChordPrice[] ChordPrices =
    [ChordPrice1, ChordPrice2, ChordPrice3, ChordPrice4, ChordPrice5, ChordPrice6, ChordPrice7, ChordPrice8, ChordPrice9, ChordPrice10];
}
