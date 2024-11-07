namespace Wasko;

public class ModelInputMapEmployerCalendarValidator : AbstractValidator<ModelInputMapEmployerCalendar> {
  public ModelInputMapEmployerCalendarValidator()
  {
    RuleFor(x => x.Start)
      .NotEmpty()
      .WithMessage("The 'Start' date is required.");

    RuleFor(x => x.End)
      .NotEmpty()
      .WithMessage("The 'End' date is required.");

    RuleFor(x => new { x.Start, x.End })
      .Must(x => x.Start < x.End)
      .WithMessage("The 'Start' date must be earlier than or equal to the 'End' date.");
  }
}