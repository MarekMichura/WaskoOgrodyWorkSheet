class StorageProfil
{
  public static IReadOnlyList<ModelProfil> Profiles = [
    new (){
      ID = StorageUser.Users.First(a=>a.UserName == "Maciek").Id,
      FirstName = "Maciek",
      LastName = "Wasko",
      WorkStartDate = new DateOnly(2024, 7, 1)
    },
    new (){
      ID = StorageUser.Users.First(a=>a.UserName == "Marek").Id,
      FirstName = "Marek",
      LastName = "Michura",
      WorkStartDate = new DateOnly(2023, 4, 1)
    },
  ];
}