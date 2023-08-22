import React from 'react'
import { Footer, Header, Ourcustomers, Ourservices, Tocontact } from '../containers'
import {Navbar} from '../components'
const Service = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Header/>
      </div>
      <Ourcustomers/>
      <Tocontact/>
      <Footer/>
    </div>
  )
}

export default Service
