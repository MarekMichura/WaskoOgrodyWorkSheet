import {type LatLngTuple} from 'leaflet'

import type en from '@/locale/translations/en_US'

type IPositions = Record<keyof typeof en.project, LatLngTuple>

export const positions: IPositions = {
  Grzegorzecka: [50.0569821, 19.9577755],
  May3: [50.0610969, 19.9096198],
  Pychowicka1: [50.0316152, 19.9170564],
  Wizjonerow: [50.0857039, 19.8838734],
}
