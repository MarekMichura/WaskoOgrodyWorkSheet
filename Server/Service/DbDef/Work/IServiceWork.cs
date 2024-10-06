namespace Wasko;

interface IServiceWork
{
  IEnumerable<ModelWorkLocation> GetWorkLocations();
  IEnumerable<ModelWorkHour>? AddOrChangeWorkHours(DateOnly date, IEnumerable<ModelInputWorkHours.WorkHours> hours);
}