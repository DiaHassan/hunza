import React from 'react'
import { Footer, Servicecontainer, Servicedisplay,  Tocontact } from '../containers'
import {Navbar} from '../components'
import { S1, S2, S3} from '../assets'

const Service = () => {
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Servicecontainer/>
      </div>
      <Servicedisplay
      id="1"
      title="App Development"
      text="Transform your unique business needs into powerful software solutions. Our experts design, develop, and deploy tailored applications that align with your goals and boost efficiency. Transform your unique business needs into powerful software solutions. Our experts design, develop, and deploy tailored applications that align with your goals and boost efficiency."
      image={S3}
      swt={false}
      clsipt1={"sc-display-first"}
      clsipt2={"sc-display-none"}
      /> 
      <Servicedisplay
      id="2"
      title="Cloud Migration"
      text="Seamlessly transition to the cloud and integrate your systems for enhanced collaboration and scalability. Our cloud services optimize performance while ensuring data security and accessibility. Seamlessly transition to the cloud and integrate your systems for enhanced collaboration and scalability. Our cloud services optimize performance while ensuring data security and accessibility."
      image={S2}
      swt={true}
      clsipt1={"sc-display-second"}
      clsipt2={"sc-display-first"}
      />
      <Servicedisplay
      id="3"
      title="Data Analytics"
      text="Harness the power of your data with our analytics solutions. We provide tools to gather, analyze, and visualize data, enabling data-driven decision-making and uncovering valuable insights. Harness the power of your data with our analytics solutions. We provide tools to gather, analyze, and visualize data, enabling data-driven decision-making and uncovering valuable insights."
      image={S1}
      swt={false}
      clsipt1={"sc-display-first"}
      clsipt2={"sc-display-none"}
      />
      <Tocontact/>
      <Footer/>
    </div>
  )
}

export default Service
