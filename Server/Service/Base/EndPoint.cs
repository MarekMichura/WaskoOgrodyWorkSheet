using System.Text.Json;
using System.Text.Json.Serialization;

namespace Wasko;

class EndPoint : IEndPoint, IService
{
    public short Priority => short.MinValue + 2;

    public void DefineEndPoint(WebApplication app)
    {
        if (!app.Environment.IsDevelopment())
        {
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.MapControllers();

        app.UseRouting();
        app.UseSession();
        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoint => { });
    }

    public void DefineService(WebApplicationBuilder builder)
    {
        builder.Services.AddControllersWithViews()
          .AddJsonOptions(options =>
          {
              options.JsonSerializerOptions.Converters.Add(new TimeOnlyJsonConverter());
              options.JsonSerializerOptions.Converters.Add(new DateOnlyJsonConverter());
          });

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSession();

        builder.Services.AddResponseCompression(options =>
        {
            options.EnableForHttps = true;
        });
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