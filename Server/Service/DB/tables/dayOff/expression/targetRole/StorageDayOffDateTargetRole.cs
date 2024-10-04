namespace Wasko;

class StorageDayOffExpressionTargetRole
{
  static public IEnumerable<ModelDayOffExpressionTargetRole> DaysOffTargets = _DaysOffTargets().ToArray();
  static private IEnumerable<ModelDayOffExpressionTargetRole> _DaysOffTargets()
  {
    yield return new() { DayOffID = StorageDayOffExpression.wolne_soboty, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.wolne_niedziele, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.nowy_rok, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.trzech_Króli, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.święto_pracy, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.święto_konstytucji, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.wniebowzięcie_Najświętszej_Maryi_Panny, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.wszystkich_świętych, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.święto_Niepodległości, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.boże_narodzenie_dzień_pierwszy, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.boże_narodzenie_dzień_drugi, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.wielkanoc, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.poniedziałek_wielkanocny, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.zielone_Świątki, TargetID = StorageRole.polishHolidaysID };
    yield return new() { DayOffID = StorageDayOffExpression.boże_Ciało, TargetID = StorageRole.polishHolidaysID };

  }
}