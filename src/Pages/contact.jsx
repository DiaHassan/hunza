import React from 'react'
import { Footer, Form } from '../containers'
import {Navbar} from '../components'
import Uploadtodb from '../Presenter/uploadToDB'
const Contact = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Form/>
      </div>
      {/* <Uploadtodb/> */}
      <Footer/>
    </div>
  )
}

export default Contact