import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import dynamic from 'next/dynamic'
import {createRoot} from 'react-dom/client'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const PinIcon = dynamic(() => import('@/components/icon/pin/pin'), {ssr: false})

const container = document.createElement('div')
createRoot(container).render(<PinIcon status={false} />)
const customIcon = L.divIcon({
  className: '',
  html: container,
  iconSize: [64, 64],
})
function ProjectMap() {
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
          Jesteś w Warszawie!
          <br />
          Mozna tu dać ikonki 🇵🇱 co chcecie np
          <button>Przycisk do innej strony lub elementu</button>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default ProjectMap
