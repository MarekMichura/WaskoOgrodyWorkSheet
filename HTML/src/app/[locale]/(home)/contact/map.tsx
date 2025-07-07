import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer} from 'react-leaflet'

function ContactMap() {
  return (
    <MapContainer
      center={[50.0664924, 19.9449478]}
      zoom={13}
      scrollWheelZoom={false}
      style={{height: '100%', width: '100%', position: 'absolute'}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default ContactMap
