import React from 'react'
import './aboutheader.css'

const Aboutheader = () => {
  let text1 = 'At Hunza, we are not just a software consulting company  we are architects of digital transformation, orchestrators of technological excellence, and partners in your journey towards success. With a passion for innovation and an unwavering commitment to our clients, we stand as a beacon of expertise in the realm of software solutions.'

  let text2 = 'Who We Are Born from the fusion of brilliant minds and driven by a collective pursuit of technological advancement, Hunza emerged as a force to be reckoned with in the software consulting landscape. Our story is one of resilience, adaptability, and a relentless pursuit of excellence.'
  
  let text3 = 'Our Mission Our mission is clear: to reshape businesses and industries through innovative software solutions. We embark on each project with the fervent desire to empower our clients, equipping them with the tools to overcome challenges, seize opportunities, and thrive in a digital world.'
  
  let text4 = 'Our Approach At the core of our approach lies collaboration. We dont just offer solutions; we craft partnerships. Our process begins with a deep understanding of your unique needs and challenges. We listen, we learn, and we strategize. With this foundation, we architect custom software solutions that align seamlessly with your goals, ensuring measurable results and meaningful impact.'  

  return (
    <div className='ah-main section-padding'>
      <h1 className='gradient-text ah-main-h1'>Who are we?</h1>
      <div className='ah'>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>
      </div>
    </div>
  )
}

export default Aboutheader
