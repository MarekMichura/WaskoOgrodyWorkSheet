namespace Wasko;

public class Program
{
  private static WebApplicationBuilder? _builder;
  private static WebApplication? _app;
  public static WebApplicationBuilder Builder => _builder ?? throw new NullReferenceException();
  public static WebApplication App => _app ?? throw new NullReferenceException();

  static void Main()
  {
    _builder = WebApplication.CreateBuilder();
    Builder.DefineServices();

    _app = Builder.Build();
    App.DefineEndPoints();

    App.Run();
  }
}


// using System.Diagnostics;

// public class Program
// {

//   private static void Benchmark(Action act, int iterations)
//   {
//     GC.Collect();
//     act.Invoke(); // run once outside of loop to avoid initialization costs
//     Stopwatch sw = Stopwatch.StartNew();
//     for (int i = 0; i < iterations; i++)
//     {
//       act.Invoke();
//     }
//     sw.Stop();
//     Console.WriteLine((sw.ElapsedTicks).ToString());
//   }

//   private static void V1(DateOnly start, DateOnly end)
//   {
//     var dayStart = start.DayNumber;
//     int daysDifference = end.DayNumber - start.DayNumber + 1;
//     var result = new Dictionary<DateOnly, object>(daysDifference);

//     for (int i = 0; i < daysDifference; i++)
//     {
//       var currentDate = DateOnly.FromDayNumber(dayStart + i);
//       result[currentDate] = new object();
//     }
//   }

//   private static void V2(DateOnly start, DateOnly end)
//   {
//     var dayStart = start.DayNumber;
//     int daysDifference = end.DayNumber - start.DayNumber + 1;
//     var result = new Dictionary<DateOnly, object>(daysDifference);

//     for (int i = 0; i < daysDifference; i++)
//     {
//       var currentDate = DateOnly.FromDayNumber(dayStart + i);
//       result[currentDate] = new object();
//     }
//   }

//   public static void Main(string[] args)
//   {
//     var start = new DateOnly(2000, 01, 01);
//     var end = new DateOnly(2000, 02, 01);

//     Benchmark(() => { V1(start, end); }, 10000);
//     Benchmark(() => { V2(start, end); }, 10000);
//   }

// }