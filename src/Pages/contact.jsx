import React from 'react'
import { Footer, Form } from '../containers'
import {Navbar} from '../components'
const Contact = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Form/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact