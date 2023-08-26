import React from 'react'
import './staff.css'
import { S1, S2, S3} from '../../assets'

const Staff = () => {
  return (
    <div className='staff-main section-padding'>
      <h1 className='gradient-text staff-main-h1'>Our Team</h1>
      <div className='staff'>
        <div className='staff-card'>
          <img src={S3} alt="Not found" />
          <h1>Person 1</h1>
          <h3>CEO</h3>
        </div>
        <div className='staff-card'>
          <img src={S2} alt="Not found" />
          <h1>Person 2</h1>
          <h3>COO</h3>
        </div>
        <div className='staff-card'>
          <img src={S1} alt="Not found" />
          <h1>Person 3</h1>
          <h3>Software developer</h3>
        </div>

      </div>
    </div>
  )
}

export default Staff
