namespace Wasko;

class StorageChord
{
  static public IEnumerable<ModelChord> Chords = _Chords().ToArray();
  static private IEnumerable<ModelChord> _Chords()
  {
    yield return new() { ID = "7b989a90-b2a4-4514-9020-756501c7061d", CreatorID = StorageUser.admin, Name = "Goły korzeń" };
    yield return new() { ID = "6b5f2ead-4357-482f-9022-e5eb02822313", CreatorID = StorageUser.admin, Name = "p9" };
    yield return new() { ID = "7dd19798-98d4-4411-9c21-8fe1e2212e8a", CreatorID = StorageUser.admin, Name = "p11" };
    yield return new() { ID = "4c1dadaa-8d6a-4a02-99db-aeca64fdc0bf", CreatorID = StorageUser.admin, Name = "c1,5" };
    yield return new() { ID = "c92154e8-e9b9-4379-89db-23fdb7eef1e7", CreatorID = StorageUser.admin, Name = "C2" };
    yield return new() { ID = "34929715-6e9b-4ebd-bdb7-591fa7bfc1dc", CreatorID = StorageUser.admin, Name = "C3" };
    yield return new() { ID = "bd13c6b0-8e2c-4048-a42c-a843d8581466", CreatorID = StorageUser.admin, Name = "C5" };
    yield return new() { ID = "68c97d5f-b6b1-457c-addd-100873004b9d", CreatorID = StorageUser.admin, Name = "C9" };
    yield return new() { ID = "d386701e-18cd-4cfc-ab3e-5d0750266bd7", CreatorID = StorageUser.admin, Name = "Rozchodniki" };
    yield return new() { ID = "4a445a6a-07cf-490a-b1d4-37364ad15e4d", CreatorID = StorageUser.admin, Name = "Drzewa 16-18" };
    yield return new() { ID = "b7e7da00-6c48-4bb0-8399-fe44f33d94e4", CreatorID = StorageUser.admin, Name = "Drzewa 18-20" };
  }

  static public string Goły = Chords.First(a => a.Name == "Goły korzeń").ID;
  static public string p9 = Chords.First(a => a.Name == "p9").ID;
  static public string p11 = Chords.First(a => a.Name == "p11").ID;
  static public string c1 = Chords.First(a => a.Name == "c1,5").ID;
  static public string C2 = Chords.First(a => a.Name == "C2").ID;
  static public string C3 = Chords.First(a => a.Name == "C3").ID;
  static public string C5 = Chords.First(a => a.Name == "C5").ID;
  static public string C9 = Chords.First(a => a.Name == "C9").ID;
  static public string Rozchodniki = Chords.First(a => a.Name == "Rozchodniki").ID;
  static public string Drzewa16 = Chords.First(a => a.Name == "Drzewa 16-18").ID;
  static public string Drzewa18 = Chords.First(a => a.Name == "Drzewa 18-20").ID;
}