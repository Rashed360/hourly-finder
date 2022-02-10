import React from 'react'
import LeafletMap from './LeafletMap'

const MyMap = ({center, markers}) => {
  return <LeafletMap center={center} markers={markers} />
}

export default MyMap
