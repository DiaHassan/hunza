import React from 'react'
import './servicecontainer.css'
import { Servicecard } from '../../components'
import { S1, S2, S3} from '../../assets'

const Servicecontainer = () => {
  return (
    <div className='sc-main section-padding'>
      <h1 className='gradient-text sc-main-h1'>Our services</h1>
      <div className='sc'>
        <Servicecard id ={"#1"} image={S3} title='App Development'/>
        <Servicecard id ={"#2"} image={S2} title='Cloud Migration'/>
        <Servicecard id ={"#3"} image={S1} title='Data Analytics'/>
      </div>
    </div>
  )
}

export default Servicecontainer
