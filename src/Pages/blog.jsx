import React from 'react'
import { Footer, Blogpage } from '../containers'
import {Navbar} from '../components'
const Blog = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Blogpage/>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog