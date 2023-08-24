import React from 'react'
import './servicecard.css'
import { BsArrowRight } from 'react-icons/bs'

const Servicecard = ({id,image,title}) => {
  return (
    <div className="scard" >
        <div className='scard-img'>
            <img src={image} alt="Not found" />
        </div>
        <div className="scard-c-title">
            {/* <div className='scard-div' /> */}
            <h1>{title}</h1>
        </div>
        <div >
          <a href={id} className='scard-to'>
            <div className='scard-to-arrow'>
              <BsArrowRight/>
            </div>
            <h3>Jump to {title}</h3>

          </a>
        </div>
    </div>
  )
}

export default Servicecard
