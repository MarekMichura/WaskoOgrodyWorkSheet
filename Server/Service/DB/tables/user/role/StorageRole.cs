namespace Wasko;

class StorageRole
{
  public string ID { get; set; }
  public string Name { get; set; }

  public StorageRole(string id, string name)
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
    yield return new StorageRole("a067e4a4-dcb3-4cb4-9913-c2d8c9bb3022", "Polskie święta");
    yield return new StorageRole("c4007ff8-34ff-4d31-a8db-24ee790cf7ef", "Pracownik");
    yield return new StorageRole("c976e808-9064-4b9c-afef-8cf235e1b5ba", "Ogrodnik");
    yield return new StorageRole("92c3bcea-73b1-4462-8e5b-70835da39869", "Zarządca pracowników");
  }

  static public string getID(string name) =>
    Roles.First(a => a.Name == name).Id;
}