import React from 'react'
import './header.css'
import { Formbtn } from '../../components'
import Temp from '../../assets/Temp.png'

const Header = () => {
  return (
    <div className='header section-padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient-text'>Discover Your Software Matchmaker</h1>
        <p>Embark on a journey to find the software solution that perfectly suits your needs. Our dedicated team of experts will guide you through the landscape of options, ensuring you arrive at the destination of optimal efficiency. Let's get started on your software success story.</p>
        <div className='header-content-input'> 
        <Formbtn/>
        </div>
      </div>
      <div className="header-image hover-image">
          <img src={Temp} alt='Not found'/>
      </div>
    </div>
  )
}

export default Header
