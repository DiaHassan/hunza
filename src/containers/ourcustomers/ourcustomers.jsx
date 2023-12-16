import React from 'react'
import { google, fb, afa, wedplanix, coop} from './imports';
import './ourcustomers.css'

const Ourcustomers = () => {
  return (
    <div className='ourc section-padding'>
      <div className='ourc-title'>
        <h1 className='gradient-text'>Don't just take our word for it!</h1>
        {/* <p>... our customers</p> */}
      </div>
      <div className="ourc-c">
        <div className='ourc-div'>
          <img src={coop} alt='Not Found' className='rotate-vert-center grey-out' />
          <p>"Their insightful strategies have been a game"</p>
        </div>
        <div className='ourc-div'>
          <img src={afa} alt='Not Found' className='rotate-vert-center grey-out' />
          <p>"Collaborate with confidence, achieve with assurance"</p>
        </div>
        <div className='ourc-div'>
          <img src={wedplanix} alt='Not Found'  className='rotate-vert-center grey-out'/>
          <p>"Their insightful strategies have been a game"</p>
        </div>
        <div className='ourc-div'>
          <img src={google} alt='Not Found'  className='rotate-vert-center grey-out'/>
          <p>"Their insightful strategies have been a game"</p>
        </div>
        <div className='ourc-div'>
          <img src={fb} alt='Not Found'  className='rotate-vert-center grey-out' />
          <p>"Collaborate with confidence, achieve with assurance"</p>
        </div>
    </div>
  </div>
  )
}

export default Ourcustomers
