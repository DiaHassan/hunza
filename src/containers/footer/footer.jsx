import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="footer section-padding">
    <div className="footer-heading">
      <h1 className="gradient-text">Take a look around!</h1>
    </div>

    {/* <div className="footer-input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Subscribe</button>
    </div> */}

    <div className="footer-links">
      <div className="footer-links-logo">
        <img src={logo} alt="gpt3-logo" />

      </div>
      <div className="footer-links-div">
        <h4>Navigation</h4>
        <p>Home</p>
        <p>Services</p>
        <p>Carrers</p>
        <p>About</p>
      </div>
      <div className="footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links-div">
        <h4>Contact Details</h4>
        <p>Århusgatan 30 16445, Kista Sweden</p>
        <p>+46737745629</p>
        <p>contact@hunzasonsulting.se</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>©  2023  hunzaconsulting.se</p>
    </div>
  </div>
  )
}

export default Footer
