import React from 'react'
import '../App.css'
import iconstar from '../images/icon-star.svg'
import Rating from './Rating'

function RatingSelectionWindow() {
  return (
    <div className='outer-ctn'>
        <div className='inner-ctn'>
          <img className='star-icon' src={iconstar} />
          <h3>How did we do?</h3>
          <p className='text'>Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <Rating />
          <button className='btn'>SUBMIT</button>
        </div> 
      </div>
  )
}

export default RatingSelectionWindow