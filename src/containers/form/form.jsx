import React from 'react'
import './form.css'
import cs from '../../assets/cs.jpg'
import { S1, S2, S3} from '../../assets'

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (

        // <div className='cer section-padding'>
        //   <h2>Let us help you!</h2>
        //   <h3>info@hunza.se</h3>
        //   <p>Join us on a journey of collaboration and success. Together, we can achieve remarkable outcomes. Discover what sets us apart and how our consulting solutions can make a difference for your organization. Ready to elevate your business? Explore the possibilities with us at Hunza.</p>
        // </div>
        <div className='cer section-padding'>
          <div className='fstaff'>
            <div className='fstaff-card'>
              <img src={S3} alt="Not found" />
              <h1>Person 1</h1>
              <h3>Human Resources</h3>
              <a className='fstaff-carda' href={`mailto:${"contact@hunzasonsulting.se"}`}>contact@hunzasonsulting.se</a>
            </div>
            <div className='fstaff-card'>
              <img src={S2} alt="Not found" />
              <h1>Person 2</h1>
              <h3>Technical Support</h3>
              <a className='fstaff-carda' href={`mailto:${"contact@hunzasonsulting.se"}`}>contact@hunzasonsulting.se</a>
            </div>
          </div>
        </div>

    // <div className='form section-padding'>
    //   <img
    //     src={cs}
    //     alt="Not Found"
    //     className='form-image'
    //   />
    //   <form  className='form-content' autoComplete='off' onSubmit={handleSubmit}>
    //     <h1 className='gradient-text'>Reach Out To Us!</h1>
    //     <input type="text" id="name"   autoComplete="false" placeholder="Enter your name" className='form-ib' name="name" required />
    //     <input type="email" id="email" autoComplete="false" placeholder="Enter your Email" className='form-ib' name="email" required />
    //     <input type="tel" id="phone"   autoComplete="false" placeholder="Enter your Phone number" className='form-ib' name="phone" required />
    //     <textarea id="description"     placeholder="Your enquiry" className='form-ib' name="description" rows="4" required />
    //     <button className='form-btn' type="submit">Submit</button>
    //   </form>
    // </div>
  )
}

export default Form
