class StorageCash
{
  private static string userID(string name) =>
    StorageUser.Users.First(a => a.UserName == name).Id;

  private static string cashType(string name) =>
      CashTypes.First(a => a.Type == name).ID;

  public static IReadOnlyList<ModelCashType> CashTypes = [
    new(){ID = "a09241d6-7056-49d9-ae29-a64601d0f28a", Type = "Bonus"},
    new(){ID = "a06266ee-37ef-4d01-a340-234a5ba17466", Type = "Advance"},
    new(){ID = "8133a59a-7db7-4784-9fdb-bde02ace5777", Type = "Cash register"},
  ];

  public static IReadOnlyList<ModelCash> Cashes = [
    new (){
      ID = "199dfce8-7ee5-49e9-85ce-ad7abe6feb31",
      UserID = userID("Marek"),
      CashTypeID = cashType("Bonus"),
      Date = new DateOnly(),
      Cash = 20
    }
  ];
}