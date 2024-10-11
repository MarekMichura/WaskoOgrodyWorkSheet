namespace Wasko;

class StorageWorkLocations
{
  static public readonly ModelWorkLocation Location1 = new() { ID = "fd9991df-5d66-4b30-92df-a3c6b64748ca", Name = "Nieustawiona" };
  static public readonly ModelWorkLocation Location2 = new() { ID = "047921e7-1329-4542-acd3-119bcb645077", Name = "Drive" };
  static public readonly ModelWorkLocation Location3 = new() { ID = "b721d3d1-04cd-4244-9fa7-751b085aebfc", Name = "Office" };
  static public readonly ModelWorkLocation Location4 = new() { ID = "c31c6339-82b5-4249-87dc-14e8b09a1276", Name = "3maja" };
  static public readonly ModelWorkLocation Location5 = new() { ID = "fbda133c-eeb6-4b07-a173-3873e87f3767", Name = "Pychowicka" };
  static public readonly ModelWorkLocation Location6 = new() { ID = "a5e51680-f19e-4836-926a-ecb947eae937", Name = "Wizjonerów" };
  static public readonly ModelWorkLocation Location7 = new() { ID = "49667c7f-80d9-4436-ac6e-e11c2f96a1f5", Name = "Grzegórzecka" };
  static public readonly ModelWorkLocation Location8 = new() { ID = "32319c27-ebab-415c-a836-f701595519d3", Name = "Tarnów Dach" };
  static public readonly ModelWorkLocation Location9 = new() { ID = "5a3a2d6b-b21b-486e-bcf0-5cff0637396d", Name = "Tarnów Eurovia" };
  static public readonly ModelWorkLocation Location10 = new() { ID = "e4aa4014-3ae3-456c-ae08-d992f4713524", Name = "Quattro" };
  static public readonly ModelWorkLocation Location11 = new() { ID = "f90a6f03-1109-438e-bb07-1ba7e5900ea3", Name = "Rondo" };
  static public readonly ModelWorkLocation Location12 = new() { ID = "0e267c34-0a14-4818-8ed3-6f835bf4108a", Name = "Narama" };
  static public readonly ModelWorkLocation Location13 = new() { ID = "1a5fc842-45c2-4eb1-b252-904e9e8a1725", Name = "Kielce" };
  static public readonly ModelWorkLocation Location14 = new() { ID = "8ca4ff43-6da4-490e-ac6e-b493b7054baf", Name = "Piaskowa" };
  static public readonly ModelWorkLocation Location15 = new() { ID = "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", Name = "Poleska" };
  static public readonly ModelWorkLocation Location16 = new() { ID = "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", Name = "Mogilska" };
  static public readonly ModelWorkLocation Location17 = new() { ID = "cf9220d9-b583-4831-aff4-c7517ff84888", Name = "Henniger Graby" };
  static public readonly ModelWorkLocation Location18 = new() { ID = "1db06608-e532-45b2-b1a8-3cfeaab85f3d", Name = "klimanowa" };

  static public readonly IEnumerable<ModelWorkLocation> WorkLocations =
    [Location1, Location2, Location3, Location4, Location5, Location6, Location7, Location8, Location9, Location10, Location11, Location12, Location13, Location14, Location15, Location16, Location17, Location18];

  static public readonly string NotSet = Location1.ID;
  static public readonly string Drive = Location2.ID;
  static public readonly string Office = Location3.ID;
  static public readonly string maja = Location4.ID;
  static public readonly string Pychowicka = Location5.ID;
  static public readonly string Wizjonerów = Location6.ID;
  static public readonly string Grzegórzecka = Location7.ID;
  static public readonly string Tarnów = Location8.ID;
  static public readonly string Tarnow = Location9.ID;
  static public readonly string Quattro = Location10.ID;
  static public readonly string Rondo = Location11.ID;
  static public readonly string Narama = Location12.ID;
  static public readonly string Kielce = Location13.ID;
  static public readonly string Piaskowa = Location14.ID;
  static public readonly string Poleska = Location15.ID;
  static public readonly string Mogilska = Location16.ID;
  static public readonly string Henniger = Location17.ID;
  static public readonly string klimanowa = Location18.ID;
}
