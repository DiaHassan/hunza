import React from 'react'
import './jobadd.css'


const Jobadd = ({title, WWALF, req, extra, WYWD, image}) => {
    console.log(req)
  return (
      <div className="jba section-margin">
        <div className='jba-top'>
            <img src={image} alt="Not found" />
            <h1 className='gradient-text'>{title}</h1>
        </div>
        <div className='jba-mid'>
            <div className='jba-tb'>
                <h2>What we are looking for</h2>
                <div>{WWALF}</div>
            </div>
            <div className='jba-tb'>
                <h2>What you are going to</h2>
                <div>{WYWD}</div>
            </div>
        </div>
        <div className='jba-mid'>
            <div className='jba-tb-l1'>
                <h2>Job Requirments</h2>
                <div>{req}</div>
            </div>
            <div className='jba-tb-l2'>
                <h2>Nice to have</h2>
                <div>{extra}</div>
            </div>
        </div>
        {/* <div>
            <button className='jba-btn' type="button">Apply Here!</button>
        </div> */}
      </div>

  )
}

export default Jobadd
