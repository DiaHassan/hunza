import React from 'react'
import { Footer, Header, Ourcustomers, Ourservices, Tocontact } from '../containers'
import {Navbar} from '../components'
const Home = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Header/>
      </div>
      <Ourservices/>
      <Ourcustomers/>
      <Tocontact/>
      <Footer/>
    </div>
  )
}

export default Home
