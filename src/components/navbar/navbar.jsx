import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg'
import logo from '../../assets/logo2.png'
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const resety = () => {
    window.scrollY = 0;
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);

    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-links">
        <div className="nav-logo">
          <img src={logo} alt='Not found'/>
        </div>
        <div  className="nav-links-container">
          <p><Link to="/" className="">Home</Link></p>
          <p><Link to="/services" className="">Services</Link></p>
          <p><Link to="/carrers" className="">Careers</Link></p>
          <p><Link to="/blog" className="">Blog</Link></p>
          <p><Link to="/about" className="">About</Link></p>
          <p><Link to="/contact" className="">Contact</Link></p>
        </div>
      </div>
  
      <div className="nav-menu">

        {toggleMenu
          ? <RiCloseLine color="#023E8A" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#023E8A" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="nav-menu-container scale-up-center">
          <div className="nav-menu-container-links">
          <p><Link to="/" className="">Home</Link></p>
          <p><Link to="/services" className="">Services</Link></p>
          <p><Link to="/carrers" className="">Careers</Link></p>
          <p><Link to="/blog" className="">Blog</Link></p>
          <p><Link to="/about" className="">About</Link></p>
          <p><Link to="/contact" className="">Contact</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;