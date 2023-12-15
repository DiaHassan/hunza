import React from 'react'
import { Footer, Header, Ourcustomers, Ourservices, Tocontact } from '../containers'
import {Navbar, Banner} from '../components'
const Home = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Header/>
      </div>
      <Banner/>
      <Ourservices/>
      <Ourcustomers/>
      <Tocontact/>
      <Footer/>
    </div>
  )
}

export default Home
