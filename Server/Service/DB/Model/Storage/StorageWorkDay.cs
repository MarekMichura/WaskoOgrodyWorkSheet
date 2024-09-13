class StorageWorkDay
{
  private static string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;
  private static string constructionID(string name) =>
    StorageConstruction.Constructions.First(a => a.Name == name).ID;

  public static IReadOnlyList<ModelWorkDay> WorkDays = [
    new (){
      UserID = userID("Marek"),
      Date = new DateOnly(2024, 9, 1),
      ConstructionID = constructionID("3maja"),
      StartTime = new TimeOnly(8, 0),
      EndTime = new TimeOnly(16, 0)
    },
  ];
}