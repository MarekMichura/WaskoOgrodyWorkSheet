namespace Wasko;

class UpdateLastActualization : SaveChangesInterceptor
{
  public override int SavedChanges(SaveChangesCompletedEventData eventData, int result)
  {
    var context = eventData.Context;
    if (context is null)
      return base.SavedChanges(eventData, result);

    var actualizedEntities = context.ChangeTracker.Entries()
      .Where(a => a.State == EntityState.Modified || a.State == EntityState.Added || a.State == EntityState.Deleted)
      .Select(a => a.GetType().Name).Distinct()
      .ToList();

    foreach (var name in actualizedEntities)
    {
      var lastActualization = context.Set<ModelLastActualization>()
        .FirstOrDefault(a => a.TableName == name);

      if (lastActualization is not null)
      {
        lastActualization.LastUpdated = DateTime.Now;
        continue;
      }

      context.Set<ModelLastActualization>()
        .Add(new ModelLastActualization() { TableName = name, LastUpdated = DateTime.Now });
    }

    context.SaveChanges();
    return base.SavedChanges(eventData, result);
  }
}