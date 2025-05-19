'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import {type LatLngTuple} from 'leaflet'
// import L from 'leaflet'
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
// import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import {useCallback} from 'react'
import {MapContainer, TileLayer, Marker} from 'react-leaflet'

import {positions} from '../_data/positions'
import s from '../css.module.scss'

// L.Icon.Default.mergeOptions({iconUrl: markerIcon.src, iconRetinaUrl: markerIcon2x.src, shadowUrl: markerShadow})
const center: LatLngTuple = [50.0664924, 19.9449478]
function MapSection() {
  const scroll = useCallback((key: string) => {
    const scroll = document.querySelector(`#${key}`)
    if (!scroll) return
    window.scrollTo({behavior: 'smooth', top: scroll.getBoundingClientRect().y})
  }, [])

  return (
    <section className={s.map}>
      <MapContainer center={center} scrollWheelZoom={false} zoom={13} style={{height: '100%', width: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.entries(positions).map(([key, value], i) => (
          <Marker position={value} key={i} eventHandlers={{click: () => scroll(key)}}></Marker>
        ))}
      </MapContainer>
    </section>
  )
}

export default MapSection
