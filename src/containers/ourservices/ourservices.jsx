import React from 'react'
import './ourservices.css'
import { Service } from '../../components'

const Ourservices = () => {
  return (
    <div >
      <div className="ours section-margin">
        <div className="ours-service">
         <h1>Our Services</h1>
         <p>Unlocking business potential through innovative services. We provide comprehensive solutions spanning strategic planning, custom software development, streamlined integration, and unwavering support. Elevate your operations with our dedicated expertise.</p>
        </div>
        <div className="ours-heading">
          <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
          <p>Explore our services</p>
        </div>
        <div className="ours-container">
          {/* <h1>Test</h1>
          <h1>test</h1>
          <h1>test</h1> */}
          <Service 
            title="App Development" 
            text="Transform your unique business needs into powerful software solutions. Our experts design, develop, and deploy tailored applications that align with your goals and boost efficiency." />
          <Service 
            title="Cloud Migration" 
            text="Seamlessly transition to the cloud and integrate your systems for enhanced collaboration and scalability. Our cloud services optimize performance while ensuring data security and accessibility." />
          <Service 
            title="Data Analytics" 
            text="Harness the power of your data with our analytics solutions. We provide tools to gather, analyze, and visualize data, enabling data-driven decision-making and uncovering valuable insights." />
        </div>
      </div>
    </div>
  )
}

export default Ourservices
