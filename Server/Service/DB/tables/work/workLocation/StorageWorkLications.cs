namespace Wasko;

class StorageWorkLocations
{
  static public IEnumerable<ModelWorkLocation> WorkLocations = _WorkLocations().ToArray();
  static private IEnumerable<ModelWorkLocation> _WorkLocations()
  {
    yield return new() { ID = "fd9991df-5d66-4b30-92df-a3c6b64748ca", Name = "Nieustawiona" };
    yield return new() { ID = "047921e7-1329-4542-acd3-119bcb645077", Name = "Drive" };
    yield return new() { ID = "b721d3d1-04cd-4244-9fa7-751b085aebfc", Name = "Office" };

    yield return new() { ID = "c31c6339-82b5-4249-87dc-14e8b09a1276", Name = "3maja" };
    yield return new() { ID = "fbda133c-eeb6-4b07-a173-3873e87f3767", Name = "Pychowicka" };
    yield return new() { ID = "a5e51680-f19e-4836-926a-ecb947eae937", Name = "Wizjonerów" };
    yield return new() { ID = "49667c7f-80d9-4436-ac6e-e11c2f96a1f5", Name = "Grzegórzecka" };
    yield return new() { ID = "32319c27-ebab-415c-a836-f701595519d3", Name = "Tarnów Dach" };
    yield return new() { ID = "5a3a2d6b-b21b-486e-bcf0-5cff0637396d", Name = "Tarnów Eurovia" };
    yield return new() { ID = "e4aa4014-3ae3-456c-ae08-d992f4713524", Name = "Quattro" };
    yield return new() { ID = "f90a6f03-1109-438e-bb07-1ba7e5900ea3", Name = "Rondo" };
    yield return new() { ID = "0e267c34-0a14-4818-8ed3-6f835bf4108a", Name = "Narama" };
    yield return new() { ID = "1a5fc842-45c2-4eb1-b252-904e9e8a1725", Name = "Kielce" };
    yield return new() { ID = "8ca4ff43-6da4-490e-ac6e-b493b7054baf", Name = "Piaskowa" };
    yield return new() { ID = "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", Name = "Poleska" };
    yield return new() { ID = "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", Name = "Mogilska" };
    yield return new() { ID = "cf9220d9-b583-4831-aff4-c7517ff84888", Name = "Henniger Graby" };
    yield return new() { ID = "1db06608-e532-45b2-b1a8-3cfeaab85f3d", Name = "klimanowa" };
  }

  static public string NotSet = WorkLocations.First(a => a.Name == "Nieustawiona").ID;
  static public string Drive = WorkLocations.First(a => a.Name == "Drive").ID;
  static public string Office = WorkLocations.First(a => a.Name == "Office").ID;
  static public string maja = WorkLocations.First(a => a.Name == "3maja").ID;
  static public string Pychowicka = WorkLocations.First(a => a.Name == "Pychowicka").ID;
  static public string Wizjonerów = WorkLocations.First(a => a.Name == "Wizjonerów").ID;
  static public string Grzegórzecka = WorkLocations.First(a => a.Name == "Grzegórzecka").ID;
  static public string Tarnów = WorkLocations.First(a => a.Name == "Tarnów Dach").ID;
  static public string Tarnow = WorkLocations.First(a => a.Name == "Tarnów Eurovia").ID;
  static public string Quattro = WorkLocations.First(a => a.Name == "Quattro").ID;
  static public string Rondo = WorkLocations.First(a => a.Name == "Rondo").ID;
  static public string Narama = WorkLocations.First(a => a.Name == "Narama").ID;
  static public string Kielce = WorkLocations.First(a => a.Name == "Kielce").ID;
  static public string Piaskowa = WorkLocations.First(a => a.Name == "Piaskowa").ID;
  static public string Poleska = WorkLocations.First(a => a.Name == "Poleska").ID;
  static public string Mogilska = WorkLocations.First(a => a.Name == "Mogilska").ID;
  static public string Henniger = WorkLocations.First(a => a.Name == "Henniger Graby").ID;
  static public string klimanowa = WorkLocations.First(a => a.Name == "klimanowa").ID;
}