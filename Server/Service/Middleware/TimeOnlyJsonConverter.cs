namespace Wasko;

public class TimeOnlyJsonConverter : JsonConverter<TimeOnly>
{
  private readonly string _format = "HH:mm:ss";

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