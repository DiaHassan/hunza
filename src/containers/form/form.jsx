import React from 'react'
import './form.css'
import cs from '../../assets/cs.jpg'


const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='form section-padding'>
      <img
        src={cs}
        alt="Not Found"
        className='form-image'
      />
      <form  className='form-content' autoComplete='off' onSubmit={handleSubmit}>
        <h1 className='gradient-text'>Reach Out To Us!</h1>
        <input type="text" id="name"   autoComplete="false" placeholder="Enter your name" className='form-ib' name="name" required />
        <input type="email" id="email" autoComplete="false" placeholder="Enter your Email" className='form-ib' name="email" required />
        <input type="tel" id="phone"   autoComplete="false" placeholder="Enter your Phone number" className='form-ib' name="phone" required />
        <textarea id="description"     placeholder="Your enquiry" className='form-ib' name="description" rows="4" required />
        <button className='form-btn' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
