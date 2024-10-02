#if DEBUG
namespace Wasko;

class StorageBonus
{
  static public IEnumerable<ModelBonus> Bonuses = _Bonuses().ToArray();

  static private IEnumerable<ModelBonus> _Bonuses()
  {
    yield return new()
    {
      ID = "5a744293-575a-44b5-83bd-91818e8924a4",
      Bonus = 100,
      BonusDescription = "Za prace w sobote",
      CreatorID = StorageUser.Dima,
      TargetID = StorageUser.Dima,
    };

    yield return new()
    {
      ID = "b055128e-a98a-421d-98d5-0ca059552457",
      Bonus = 50,
      BonusDescription = "Za prace w sobote",
      CreatorID = StorageUser.Loszka,
      TargetID = StorageUser.Loszka,
    };
    yield return new()
    {
      ID = "66b3fdf2-ebcc-4bc7-8626-ae8c8941cf0b",
      Bonus = 10,
      BonusDescription = "Za bycie kierowca",
      CreatorID = StorageUser.Eryk,
      TargetID = StorageUser.Eryk,
    };
  }
}
#endif