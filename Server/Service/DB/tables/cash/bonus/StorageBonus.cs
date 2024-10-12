#if DEBUG
namespace Wasko;

class StorageBonus
{
  private static readonly ModelBonus Bonus1 = new()
  {
    ID = "5a744293-575a-44b5-83bd-91818e8924a4",
    Bonus = 100,
    BonusDescription = "Za prace w sobote",
    CreatorID = StorageUser.Dima,
    TargetID = StorageUser.Dima,
  };

  private static readonly ModelBonus Bonus2 = new()
  {
    ID = "b055128e-a98a-421d-98d5-0ca059552457",
    Bonus = 50,
    BonusDescription = "Za prace w sobote",
    CreatorID = StorageUser.Loszka,
    TargetID = StorageUser.Loszka,
  };

  private static readonly ModelBonus Bonus3 = new()
  {
    ID = "66b3fdf2-ebcc-4bc7-8626-ae8c8941cf0b",
    Bonus = 10,
    BonusDescription = "Za bycie kierowca",
    CreatorID = StorageUser.Eryk,
    TargetID = StorageUser.Eryk,
  };

  public static IEnumerable<ModelBonus> Bonuses = [Bonus1, Bonus2, Bonus3];
}
#endif