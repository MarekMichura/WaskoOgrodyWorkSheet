namespace Wasko;

class StorageBonus
{
  static public IEnumerable<ModelBonus> Bonuses = _Bonuses().ToArray();

  static private IEnumerable<ModelBonus> _Bonuses()
  {
    if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Development")
      yield break;

    yield return new()
    {
      ID = "5a744293-575a-44b5-83bd-91818e8924a4",
      Bonus = 100,
      BonusDescription = "Za prace w sobote",
      CreatorID = StorageUser.getID("Dima"),
      TargetID = StorageUser.getID("Dima"),
    };

    yield return new()
    {
      ID = "b055128e-a98a-421d-98d5-0ca059552457",
      Bonus = 50,
      BonusDescription = "Za prace w sobote",
      CreatorID = StorageUser.getID("Loszka"),
      TargetID = StorageUser.getID("Loszka"),
    };
    yield return new()
    {
      ID = "66b3fdf2-ebcc-4bc7-8626-ae8c8941cf0b",
      Bonus = 10,
      BonusDescription = "Za bycie kierowca",
      CreatorID = StorageUser.getID("Eryk"),
      TargetID = StorageUser.getID("Eryk"),
    };
  }
}