namespace Test;

class Cookies(string cookie)
{
  public readonly string[][] cookie =
    cookie.Split(';').Select(static a => a.Split('=')).ToArray();

  public string Name => cookie[0][0];
  public string Value => cookie[0][1];
  public string Expires => cookie[1][1];
  public string Path => cookie[2][1];
  public string Samesite => cookie[2][1];
}