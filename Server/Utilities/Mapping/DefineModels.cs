namespace Wasko;

public static partial class Extend {
  public static void DefineModels(this ModelBuilder model)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IBuilder).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IBuilder>()
        .ForEach(builder => builder.CreateModel(model));
  }
}