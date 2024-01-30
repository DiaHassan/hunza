import React, {useState} from 'react';
import './fnservice.css';

const Fnservice = ({ service, expanded }) => {

  const [sh, setSH] = useState(false)
  const handelOC = () => {
    setSH(!sh);
  }
  return (
    <div
      className='fnservice-item'
      onClick={handelOC}
    >
      <div className="fnserviCe-content">
        <div className='fnservice-short' >      
          <div className="fnservice-header">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
          <img src={service.icon} alt={`${service.title} icon`} />
          </div>
        {sh && 
          <div>
            <hr />  
            <p> {service.longdescription}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Fnservice;
