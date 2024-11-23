import {ERoutes} from '/route/eRoutes'
import CalendarIcon from '/svg/Calendar'
import CommentIcon from '/svg/Comment'
import GardenCardIcon from '/svg/GardenCard'
import HourGlassIcon from '/svg/HourGlass'
import PaymentIcon from '/svg/Payment'
import UmbrellaIcon from '/svg/Umbrella'

export const linksIcon = {
  [ERoutes.addComment]: CommentIcon,
  [ERoutes.addRefund]: PaymentIcon,
  [ERoutes.askBonus]: HourGlassIcon,
  [ERoutes.askDayOff]: UmbrellaIcon,
  [ERoutes.setChord]: GardenCardIcon,
  [ERoutes.setWorkingHours]: HourGlassIcon,
  [ERoutes.showCalendar]: CalendarIcon,
}
