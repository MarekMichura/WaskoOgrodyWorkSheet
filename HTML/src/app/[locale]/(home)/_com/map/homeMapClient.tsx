import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import dynamic from 'next/dynamic'
import {useCallback, useEffect, useRef, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {useTranslations} from 'use-intl'

import Ripple from '@/components/ripple/ripple'

import s from './css.module.scss'

const PinIcon = dynamic(() => import('@/components/lottie/pin/pin'), {ssr: false})
const customIcon = L.divIcon({
  html: `<div class="${s.icon}" />`,
  className: '',
  iconSize: [50, 50],
})

function Icon() {
  const [status, setStatus] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const onMouseEnter = useCallback(() => setStatus(true), [])
  const onMouseLeave = useCallback(() => setStatus(false), [])
  const onClick = useCallback(() => {
    setStatus(true)
    timeoutRef.current = setTimeout(() => setStatus(false), 1000)
  }, [])

  return (
    <div className={s.ele} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onMouseOverCapture={onClick}>
      <PinIcon status={status} />
    </div>
  )
}

function HomeMapClient() {
  const t_map = useTranslations('home.map')

  useEffect(() => {
    setTimeout(() => {
      const iconElements = document.querySelectorAll(`.${s.icon}`)
      iconElements.forEach((el) => {
        // Upewnij się, że nie montujesz drugi raz
        if (!el.hasAttribute('data-react-mounted')) {
          const root = createRoot(el)
          root.render(<Icon />)
          el.setAttribute('data-react-mounted', 'true')
        }
      })
    }, 100)
  }, [])

  return (
    <MapContainer
      center={[50.0664924, 19.9449478]}
      zoom={13}
      scrollWheelZoom={false}
      style={{height: '100%', width: '100%', position: 'absolute'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.0664924, 19.9449478]} icon={customIcon}>
        <Popup>
          {t_map('pin')}
          <br />
          <Ripple defClass>{t_map('btn')}</Ripple>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default HomeMapClient
