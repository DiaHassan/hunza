import React from 'react'
import { Footer, Tocontact, Jobadd, Carrerheader, Contactemail } from '../containers'
import {Navbar} from '../components'
import { S1 } from '../assets'

const Carrers = () => {
  let req1= '4+ years of software development experience \nBachelors or masters degree in Computer Science or Computer Engineering \nAbility to clearly and concisely articulate ideas, thoughts, and opinions during requirements and design sessions with the development team \nWilling to take initiative, learn quickly and be able to adapt to shifting priorities is essential \n4+ years  of experience of using JavaEE or Spring framework/SpringBoot \n1+ years of on-hands experience of web frontend development with ReactJS'
  console.log(req1)
  return (
    <div>
      <div className="gradient-background">
        <Navbar/>
        <Carrerheader/>
      </div>
      <Jobadd 
      title='Java Developer' 
      WWALF='We are looking for people who share our values and our passion, who are creative and who rise to meet challenges. We are looking for people who take ownership of their work and who are not afraid to roll up their sleeves and take on any task and work collaboratively. High quality and simplicity is our slogan. If this sounds like you, we want you to be a part of our team.' 
      req={req1}
      extra='- Hand-ons experience of DevOps tools such as Ansible, Puppet, Kubernetes and Docker, etc.
      - Experience of cloud services - AWS/Google or Azur cloud services' 
      WYWD='We are seeking a Senior Full-Stack Developer to design and build enterprise customer-oriented solutions using latest tools and technologies. This role requires extensive hands-on software design and development skills, deep technical expertise of frontend and backend technologies. You will manage all aspects of the software development lifecycle including design, testing, implementation, deployment and maintenance.' 
      image={S1}/>
      <Jobadd 
      title='Website React Developer' 
      WWALF='We are looking for people who share our values and our passion, who are creative and who rise to meet challenges. We are looking for people who take ownership of their work and who are not afraid to roll up their sleeves and take on any task and work collaboratively. High quality and simplicity is our slogan. If this sounds like you, we want you to be a part of our team.' 
      req={req1}
      extra='- Hand-ons experience of DevOps tools such as Ansible, Puppet, Kubernetes and Docker, etc.
      - Experience of cloud services - AWS/Google or Azur cloud services' 
      WYWD='We are seeking a Senior Full-Stack Developer to design and build enterprise customer-oriented solutions using latest tools and technologies. This role requires extensive hands-on software design and development skills, deep technical expertise of frontend and backend technologies. You will manage all aspects of the software development lifecycle including design, testing, implementation, deployment and maintenance.' 
      image={S1}/>
      <Contactemail email='info@hunzaconsulting.com' text='We are eagerly anticipating the opportunity to welcome a new member to our dynamic team. If you are passionate, skilled, and ready to make a meaningful impact, we want to hear from you! Join us on our journey of innovation and growth – lets shape the future together. Apply now and be a part of something extraordinary!






'/>
      <Footer/>
    </div>
  )
}

export default Carrers