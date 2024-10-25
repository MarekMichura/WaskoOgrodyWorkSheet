namespace Wasko;

interface IBuilder
{
  public void CreateModel(ModelBuilder builder);
}

static class Builder
{
  public static void CreateModels(this ModelBuilder model)
  {
    Assembly.GetExecutingAssembly().DefinedTypes
      .Where(x => typeof(IBuilder).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
        .Select(Activator.CreateInstance)
        .Cast<IBuilder>()
        .ForEach(builder => builder.CreateModel(model));
  }
}