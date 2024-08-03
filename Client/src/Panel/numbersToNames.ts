export function numberToMonth(month: number) {
  switch (month) {
    case 0:
      return 'Styczeń';
    case 1:
      return 'Luty';
    case 2:
      return 'Marzec';
    case 3:
      return 'Kwiecień';
    case 4:
      return 'Maj';
    case 5:
      return 'Czerwiec';
    case 6:
      return 'Lipiec';
    case 7:
      return 'Sierpień';
    case 8:
      return 'Wrzesień';
    case 9:
      return 'Październik';
    case 10:
      return 'Listopad';
    case 11:
      return 'Grudzień';
    default:
      throw new Error('Invalid number of month');
  }
}

export function numberToDay(month: number) {
  switch (month) {
    case 0:
      return 'Poniedziałek';
    case 1:
      return 'Wtorek';
    case 2:
      return 'Środa';
    case 3:
      return 'Czwartek';
    case 4:
      return 'Piątek';
    case 5:
      return 'Sobota';
    case 6:
      return 'Niedziela';
  }
}