import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Circle, Marker, Popup, TileLayer } from 'react-leaflet'

const accessToken = process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN

let DefaultIcon = L.icon({
  iconUrl: '/images/map/icon/user.png',
  iconSize: [15, 19],
  iconAnchor: [7, 9],
  popupAnchor: [7, -5],
  shadowUrl: '/images/map/icon/back.png',
  shadowSize: [38, 37],
  shadowAnchor: [18, 14],
})
L.Marker.prototype.options.icon = DefaultIcon

const fillOptions = {
  color: '#000000',
  fillColor: '#74CFE4',
  fillOpacity: 0.3,
  weight: 2,
  dashArray: 8,
}

let CartIcon = L.icon({
  iconUrl: '/images/map/icon/cart.png',
  iconSize: [15, 19],
  iconAnchor: [7, 9],
  popupAnchor: [7, -5],
  shadowUrl: '/images/map/icon/back.png',
  shadowSize: [38, 37],
  shadowAnchor: [18, 14],
})

const position = [23.754925, 90.376495]
const position2 = [23.755395, 90.382118]
const position3 = [23.756652, 90.372205]

const LeafletMap = () => {
  
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '100%', zIndex: 90, borderRadius: '5px' }}
    >
      {/* <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer
        attribution='<a href="https://www.mapbox.com/">Mapbox</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='+accessToken} id='mapbox/streets-v11'
      />
      <Circle center={position} pathOptions={fillOptions} radius={800} />
      <Marker position={position}>
        <Popup><b>Your Location</b><br/>Daffodil International University</Popup>
      </Marker>
      <Marker position={position2} icon={CartIcon}>
        <Popup><b>Project based</b><br/>Web Developer</Popup>
      </Marker>
      <Marker position={position3}>
        <Popup><b>Hourly Job</b><br/>Restruant Waiter</Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap
