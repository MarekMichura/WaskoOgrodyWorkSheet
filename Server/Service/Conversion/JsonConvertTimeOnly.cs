namespace Wasko;

public class JsonConvertTimeOnly : JsonConverter<TimeOnly> {
  private const string _format = "HH:mm:ss";

  public override TimeOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
  {
    var value = reader.GetString() ?? throw new NullReferenceException();
    return TimeOnly.ParseExact(value, _format);
  }

  public override void Write(Utf8JsonWriter writer, TimeOnly value, JsonSerializerOptions options)
  {
    writer.WriteStringValue(value.ToString(_format));
  }
}