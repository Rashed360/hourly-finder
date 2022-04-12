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

const LeafletMap = ({mark,title,desc}) => {
  
  return (
    <MapContainer
      center={mark}
      zoom={15}
      style={{ height: '100%', zIndex: 90, borderRadius: '5px' }}
    >
      <TileLayer
        attribution='<a href="https://www.mapbox.com/">Mapbox</a> | <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='+accessToken} id='mapbox/streets-v11'
      />
      <Circle center={mark} pathOptions={fillOptions} radius={800} />
      <Marker position={mark}>
        <Popup><b>{title}</b><br/>{desc}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap
