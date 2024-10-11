namespace Wasko;

class StorageChord
{
  static public readonly ModelChord Chord1 = new() { ID = "7b989a90-b2a4-4514-9020-756501c7061d", CreatorID = StorageUser.admin, Name = "Goły korzeń" };
  static public readonly ModelChord Chord2 = new() { ID = "6b5f2ead-4357-482f-9022-e5eb02822313", CreatorID = StorageUser.admin, Name = "p9" };
  static public readonly ModelChord Chord3 = new() { ID = "7dd19798-98d4-4411-9c21-8fe1e2212e8a", CreatorID = StorageUser.admin, Name = "p11" };
  static public readonly ModelChord Chord4 = new() { ID = "4c1dadaa-8d6a-4a02-99db-aeca64fdc0bf", CreatorID = StorageUser.admin, Name = "c1,5" };
  static public readonly ModelChord Chord5 = new() { ID = "c92154e8-e9b9-4379-89db-23fdb7eef1e7", CreatorID = StorageUser.admin, Name = "C2" };
  static public readonly ModelChord Chord6 = new() { ID = "34929715-6e9b-4ebd-bdb7-591fa7bfc1dc", CreatorID = StorageUser.admin, Name = "C3" };
  static public readonly ModelChord Chord7 = new() { ID = "bd13c6b0-8e2c-4048-a42c-a843d8581466", CreatorID = StorageUser.admin, Name = "C5" };
  static public readonly ModelChord Chord8 = new() { ID = "68c97d5f-b6b1-457c-addd-100873004b9d", CreatorID = StorageUser.admin, Name = "C9" };
  static public readonly ModelChord Chord9 = new() { ID = "d386701e-18cd-4cfc-ab3e-5d0750266bd7", CreatorID = StorageUser.admin, Name = "Rozchodniki" };
  static public readonly ModelChord Chord10 = new() { ID = "4a445a6a-07cf-490a-b1d4-37364ad15e4d", CreatorID = StorageUser.admin, Name = "Drzewa 16-18" };
  static public readonly ModelChord Chord11 = new() { ID = "b7e7da00-6c48-4bb0-8399-fe44f33d94e4", CreatorID = StorageUser.admin, Name = "Drzewa 18-20" };

  static public readonly IEnumerable<ModelChord> Chords =
    [Chord1, Chord2, Chord3, Chord4, Chord5, Chord6, Chord7, Chord8, Chord9, Chord10, Chord11];

  static public readonly string Goły = Chord1.ID;
  static public readonly string p9 = Chord2.ID;
  static public readonly string p11 = Chord3.ID;
  static public readonly string c1 = Chord4.ID;
  static public readonly string C2 = Chord5.ID;
  static public readonly string C3 = Chord6.ID;
  static public readonly string C5 = Chord7.ID;
  static public readonly string C9 = Chord8.ID;
  static public readonly string Rozchodniki = Chord9.ID;
  static public readonly string Drzewa16 = Chord10.ID;
  static public readonly string Drzewa18 = Chord11.ID;
}
