import React from 'react'
import { Footer, Aboutheader, Staff, Tocontact } from '../containers'
import {Navbar} from '../components'
const About = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Aboutheader/>
      </div>
      <Staff/>
      <Tocontact/>
      <Footer/>
    </div>
  )
}

export default About