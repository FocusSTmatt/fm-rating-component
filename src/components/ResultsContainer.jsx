import React from 'react'
import thankYouImage from '../images/illustration-thank-you.svg'
import "../App.css"

function ResultsContainer(props) {
    

  return (
    <div className={props.class}> 
          <div className={props.class}>
              <img src={thankYouImage}></img>
              <p className='results-score'>You selected {props.score} out of 5</p>
              <h3>Thank you!</h3>
              <p className='results-text'>We appreciate you taking the time to give a rating. 
                if you ever need more support, don&apos;t hesitate
                to get in touch!
              </p>
          </div>
      </div>
  )
}

export default ResultsContainer