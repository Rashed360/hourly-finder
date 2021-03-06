import React from "react"
import { Link } from "react-router-dom"

const AvailableSeekerFooter = () => {
  return (
    <div className='avaiable-jobseeker-footer'>
      <div className='pagination-wrapper'>
        <Link to='' className='page'>
          <span className='iconify' data-icon='codicon:arrow-left'></span> Prev
        </Link>
        <Link to=''>1</Link>
        <Link to=''>2</Link>
        <Link to='' className='active'>
          3
        </Link>
        <Link to=''>4</Link>
        <Link to='' className='page next'>
          Next <span className='iconify' data-icon='codicon:arrow-right'></span>
        </Link>
      </div>
    </div>
  )
}

export default AvailableSeekerFooter
