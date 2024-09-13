class StorageWorkDayChord
{
  private static string chordID(string name) =>
    StorageChord.Chords.First(a => a.Name == name).ID;
  private static string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  public static IReadOnlyList<ModelWorkDayChord> WorkDayChords = [
    new (){ChordID = chordID("Goły korzeń"), UserID = userID("Marek"), Date = new DateOnly(2024,9,1), Count = 2},
  ];
}