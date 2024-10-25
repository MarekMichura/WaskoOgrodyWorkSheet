namespace Wasko;

public interface IServiceWork
{
  IEnumerable<ModelWorkLocation> GetWorkLocations();
  IEnumerable<ModelWorkHours>? AddOrChangeWorkHours(DateOnly date, IEnumerable<ModelInputWorkHours.WorkHours> hours);
}