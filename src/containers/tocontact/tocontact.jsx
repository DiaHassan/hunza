import React from 'react'
import './tocontact.css'
import Temp from '../../assets/Temp.png'
import { Formbtn } from '../../components'

const Tocontact = () => {
  return (
  <div className="tc section-padding" id="possibility">
    <div className="tc-image">
      <img src={Temp} alt="Not Found" />
    </div>
    <div className="tc-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient-text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
      <Formbtn/>
    </div>
  </div>
  )
}

export default Tocontact
