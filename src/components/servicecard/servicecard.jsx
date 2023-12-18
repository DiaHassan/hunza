import React from 'react'
import './servicecard.css'
import { BsArrowRight } from 'react-icons/bs'

const Servicecard = ({id,image,title}) => {
  return (
    <div className="scard" >
      <a href={id}>
        <div className='scard-img'>
            <img src={image} alt="Not found" />
        </div>
        <div className="scard-c-title">
            {/* <div className='scard-div' /> */}
            <h1>{title}</h1>
        </div>
      </a>
    </div>
  )
}

export default Servicecard
