import React from 'react'
import './ourservices.css'
import { Service } from '../../components'

const Ourservices = () => {
  return (
    <div >
      <div className="ours section-margin">
        <div className="ours-service">
         <h1>Our Services</h1>
         <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. </p>
        </div>
        <div className="ours-heading">
          <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
          <p>Explore our services</p>
        </div>
        <div className="ours-container">
          {/* <h1>Test</h1>
          <h1>test</h1>
          <h1>test</h1> */}
          <Service title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
          <Service title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
          <Service title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div>
      </div>
    </div>
  )
}

export default Ourservices
