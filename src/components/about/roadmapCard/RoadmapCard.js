import React from 'react'

const RoadmapCard = ({month, day, title}) => {
  return (
    <div className='roadmap-card'>
        <small>{month}</small>
        <h3>{day}</h3>
        <p>{title}</p>
    </div>
  )
}

export default RoadmapCard
