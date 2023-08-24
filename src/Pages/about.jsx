import React from 'react'
import { Footer, Tocontact } from '../containers'
import {Navbar} from '../components'
const About = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>

      </div>

      <Tocontact/>
      <Footer/>
    </div>
  )
}

export default About