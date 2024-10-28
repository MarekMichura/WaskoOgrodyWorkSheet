namespace Wasko;

public class DateOnlyJsonConverter : JsonConverter<DateOnly>
{
  private readonly string _format = "yyyy-MM-dd";

  public override DateOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
  {
    var value = reader.GetString() ?? throw new NullReferenceException();
    return DateOnly.ParseExact(value, _format);
  }

  public override void Write(Utf8JsonWriter writer, DateOnly value, JsonSerializerOptions options)
  {
    writer.WriteStringValue(value.ToString(_format));
  }
}
