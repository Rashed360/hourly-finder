import React from 'react'

const MemberCard = ({name,designation,image}) => {
  return (
    <div className='team-card'>
        <img src={image} alt='' />
        <div className='team-card-title'>
            <h4>{name}</h4>
            <small>{designation}</small>
        </div>
    </div>
  )
}

export default MemberCard
