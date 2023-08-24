import React from 'react'
import './servicedisplay.css'
import { Formbtn } from '../../components'

const Servicedisplay = ({ image, title, text ,id, swt }) => {
  return (
    <div className="sc section-padding" id={id}>
      { swt || <div className="sc-image">
        <img src={image} alt="Not Found" />
      </div>}
      <div className="sc-content">

        <h1 className="gradient-text">{title}</h1>
        <p>{text}</p>
        <Formbtn/>
      </div>
      { !swt || <div className="sc-image">
        <img src={image} alt="Not Found" />
      </div>}
    </div>
  )
}

export default Servicedisplay
