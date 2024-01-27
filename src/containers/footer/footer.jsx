import React from 'react'
import './footer.css'
// import logo from '../../assets/logo.svg'
import logo from '../../assets/logo2.png'
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
      {/* <div className="footer-links-div">
        <h4>Navigation</h4>
        <p>Home</p>
        <p>Services</p>
        <p>Carrers</p>
        <p>About</p>
      </div> */}
      <div className="footer-links-div">
        <h4>Hunza Consulting AB</h4>
        <p>Org.nr: 559047-3582</p>
        <p><a href={`geo:${"Århusgatan 30 16445, Kista Sweden"}`}>Århusgatan 30 16445, Kista Sweden</a>.</p>

      </div>
      <div className="footer-links-div">
        <h4>Contact Details</h4>
        <p>
          
          <a href={`tel:${"+46737745629"}`}>+46737745629</a>
        </p>
        <p>
        <a href={`mailto:${"contact@hunzasonsulting.se"}`}>contact@hunzasonsulting.se</a>

        </p>
        <p>
          
          Monday - Friday: 07:00 - 16:00
        </p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>©  2024  hunzaconsulting.se</p>
    </div>
  </div>
  )
}

export default Footer
