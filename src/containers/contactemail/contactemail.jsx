import React from 'react';
import './contactemail.css'

const Contactemail = ({ email, text }) => {
  return (
    <div className='ce section-padding'>
      <h2>Email us your CV and job letter at:</h2>
      <h3>{email}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Contactemail;
