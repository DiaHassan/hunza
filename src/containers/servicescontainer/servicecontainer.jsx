import React from 'react'
import './servicecontainer.css'
import { Servicecard } from '../../components'
import { S1, S2, S3} from '../../assets'
import Newservices from '../newservices/newservices'

const Servicecontainer = () => {
  return (
    <div className='sc-main section-padding'>
      <h1 className='gradient-text sc-main-h1'>Our services</h1>
      <Newservices/>
    </div>
  )
}

export default Servicecontainer
