namespace Wasko;

public class StorageWorkLocations {
  public static readonly ModelWorkLocation Location1 = new() { ID = "fd9991df-5d66-4b30-92df-a3c6b64748ca", Name = "Nieustawiona" };
  public static readonly ModelWorkLocation Location2 = new() { ID = "047921e7-1329-4542-acd3-119bcb645077", Name = "Drive" };
  public static readonly ModelWorkLocation Location3 = new() { ID = "b721d3d1-04cd-4244-9fa7-751b085aebfc", Name = "Office" };
  public static readonly ModelWorkLocation Location4 = new() { ID = "c31c6339-82b5-4249-87dc-14e8b09a1276", Name = "3maja" };
  public static readonly ModelWorkLocation Location5 = new() { ID = "fbda133c-eeb6-4b07-a173-3873e87f3767", Name = "Pychowicka" };
  public static readonly ModelWorkLocation Location6 = new() { ID = "a5e51680-f19e-4836-926a-ecb947eae937", Name = "Wizjonerów" };
  public static readonly ModelWorkLocation Location7 = new() { ID = "49667c7f-80d9-4436-ac6e-e11c2f96a1f5", Name = "Grzegórzecka" };
  public static readonly ModelWorkLocation Location8 = new() { ID = "32319c27-ebab-415c-a836-f701595519d3", Name = "Tarnów Dach" };
  public static readonly ModelWorkLocation Location9 = new() { ID = "5a3a2d6b-b21b-486e-bcf0-5cff0637396d", Name = "Tarnów Eurovia" };
  public static readonly ModelWorkLocation Location10 = new() { ID = "e4aa4014-3ae3-456c-ae08-d992f4713524", Name = "Quattro" };
  public static readonly ModelWorkLocation Location11 = new() { ID = "f90a6f03-1109-438e-bb07-1ba7e5900ea3", Name = "Rondo" };
  public static readonly ModelWorkLocation Location12 = new() { ID = "0e267c34-0a14-4818-8ed3-6f835bf4108a", Name = "Narama" };
  public static readonly ModelWorkLocation Location13 = new() { ID = "1a5fc842-45c2-4eb1-b252-904e9e8a1725", Name = "Kielce" };
  public static readonly ModelWorkLocation Location14 = new() { ID = "8ca4ff43-6da4-490e-ac6e-b493b7054baf", Name = "Piaskowa" };
  public static readonly ModelWorkLocation Location15 = new() { ID = "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", Name = "Poleska" };
  public static readonly ModelWorkLocation Location16 = new() { ID = "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", Name = "Mogilska" };
  public static readonly ModelWorkLocation Location17 = new() { ID = "cf9220d9-b583-4831-aff4-c7517ff84888", Name = "Henniger Graby" };
  public static readonly ModelWorkLocation Location18 = new() { ID = "1db06608-e532-45b2-b1a8-3cfeaab85f3d", Name = "klimanowa" };

  public static readonly ModelWorkLocation[] WorkLocations =
    [Location1, Location2, Location3, Location4, Location5, Location6, Location7, Location8, Location9, Location10, Location11, Location12, Location13, Location14, Location15, Location16, Location17, Location18];

  public static readonly string NotSet = Location1.ID;
  public static readonly string Drive = Location2.ID;
  public static readonly string Office = Location3.ID;
  public static readonly string maja = Location4.ID;
  public static readonly string Pychowicka = Location5.ID;
  public static readonly string Wizjonerów = Location6.ID;
  public static readonly string Grzegórzecka = Location7.ID;
  public static readonly string Tarnów = Location8.ID;
  public static readonly string Tarnow = Location9.ID;
  public static readonly string Quattro = Location10.ID;
  public static readonly string Rondo = Location11.ID;
  public static readonly string Narama = Location12.ID;
  public static readonly string Kielce = Location13.ID;
  public static readonly string Piaskowa = Location14.ID;
  public static readonly string Poleska = Location15.ID;
  public static readonly string Mogilska = Location16.ID;
  public static readonly string Henniger = Location17.ID;
  public static readonly string klimanowa = Location18.ID;
}
