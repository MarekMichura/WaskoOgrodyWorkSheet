class StorageRole
{
  public string ID { get; set; }
  public string Name { get; set; }

  public StorageRole(string id, string name, string description)
  {
    ID = id;
    Name = name;
  }

  static public implicit operator ModelRole(StorageRole role) => new()
  {
    Id = role.ID,
    Name = role.Name,
    NormalizedName = role.Name.ToUpper(),
    ConcurrencyStamp = Guid.NewGuid().ToString(),
    AuthorID = StorageUser.Users.First(a => a.UserName == "admin").Id
  };

  static public IEnumerable<ModelRole> Roles = _Roles().ToArray();
  static private IEnumerable<ModelRole> _Roles()
  {
    yield return new StorageRole("a067e4a4-dcb3-4cb4-9913-c2d8c9bb3022", "PolishHolidays", "Access to polish holidays");
    yield return new StorageRole("c4007ff8-34ff-4d31-a8db-24ee790cf7ef", "Employee", "Give access to management your working time");
    yield return new StorageRole("8e0086b3-65aa-48d7-9ab8-56407c22f5b5", "OfficeWorker", "Give access to work in office");
    yield return new StorageRole("c976e808-9064-4b9c-afef-8cf235e1b5ba", "Gardener", "Give access to log completed tasks, tracking the number of plants processed for each specific type.");
    yield return new StorageRole("f183e62d-53df-48a7-a543-7d022170c6d0", "CreateNewEmployee", "Daje możliwość dodawania nowych pracowników do systemu");
    yield return new StorageRole("4c53f115-39f3-4f60-a855-dca17d35b1fd", "FireEmployee", "Daje możliwość zwalniania pracowników");
    yield return new StorageRole("ae2f11f8-8e0d-40f9-8e72-7de96d5d177c", "RoleManager", "Daje możliwość zmieniania roli pracownikom");
  }
}