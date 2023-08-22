import React from 'react'
import './header.css'
import { Formbtn } from '../../components'
import Temp from '../../assets/Temp.png'

const Header = () => {
  return (
    <div className='header section-padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient-text'>Test bla bla </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>


        <div className='header-content-input'> 
        <Formbtn/>
        </div>
      </div>
      <div className="header-image">
          <img src={Temp} alt='Not found'/>
      </div>
    </div>
  )
}

export default Header
