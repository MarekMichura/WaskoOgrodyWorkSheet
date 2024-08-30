class StorageRole
{
  public string ID { get; set; }
  public string Name { get; set; }

  public StorageRole(string id, string name)
  {
    ID = id;
    Name = name;
  }

  public static implicit operator ModelRole(StorageRole role) => new()
  {
    Id = role.ID,
    Name = role.Name,
    NormalizedName = role.Name.ToUpper(),
    ConcurrencyStamp = role.ID
  };

  public static IReadOnlyList<ModelRole> Roles = [
    new StorageRole("8b8babe4-6e75-43cf-8e83-821d3bc99bdb", "Employee"),
    new StorageRole("960f2a8d-7f66-4a2e-a339-f008fb5f8d50", "EmployeeManager"),
    new StorageRole("2dd8424d-6e2e-480c-97e4-73cf8d65af97", "ConstructionManager"),
    new StorageRole("9907f42e-9b2f-47b7-8b6e-1144b373ee55", "DayOffManager"),
  ];
}