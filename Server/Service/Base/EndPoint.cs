namespace Wasko;

public class EndPoint : IMiddleware, IService
{
  public short Priority => short.MinValue + 2;

  public void DefineEndPoint(WebApplication app)
  {
    if (!app.Environment.IsDevelopment())
    {
      app.UseHsts();
    }


    app.UseStaticCompressedFiles();
    app.UseHttpsRedirection();
    app.MapControllers();

    app.UseRouting();
    app.UseSession();
    app.UseAuthentication();
    app.UseAuthorization();

    app.UseResponseCompression();
    app.UseEndpoints(static endpoint => { });
  }

  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddControllersWithViews()
      .AddJsonOptions(static options =>
      {
        options.JsonSerializerOptions.Converters.Add(new TimeOnlyJsonConverter());
        options.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
      });

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSession();

    builder.Services.AddResponseCompression(static options =>
    {
      options.EnableForHttps = true;
    });

    // builder.Services.AddHttpsRedirection(static options =>
    // {
    //     options.HttpsPort = 8081;
    // });

    // builder.Services.AddDataProtection()
    //     .ProtectKeysWithCertificate("thumbprint");
  }
}

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