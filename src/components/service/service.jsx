import React from 'react'
import './service.css'
import { BsArrowRight } from 'react-icons/bs'

const Service = ({ title, text }) => (
  <div className="service-container">
    <div className="service-container-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="service-container-text">
      <p>{text}</p>
    </div>
    {/* <a href=""> */}
      <div className='services-go '>
          <h3>Go to service </h3>
          <BsArrowRight className='service-icon'/>
      </div>
    {/* </a> */}
  </div>
)

export default Service
