import React from 'react'
import './servicedisplay.css'
import { Formbtn } from '../../components'

const Servicedisplay = ({ image, title, text ,id, swt,clsipt1,clsipt2 }) => {
  return (
    <div className="sc section-padding" id={id}>
      <div className={clsipt1} >
        <img src={image} alt="Not Found" />
      </div>
      <div className="sc-content">

        <h1 className="gradient-text">{title}</h1>
        <p>{text}</p>
        <Formbtn/>
      </div>
      <div className={clsipt2}>
        <img  src={image} alt="Not Found" />
      </div>
    </div>
  )
}

export default Servicedisplay
