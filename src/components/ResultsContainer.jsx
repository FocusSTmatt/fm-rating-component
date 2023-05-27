import React from 'react'
import thankYouImage from '../images/illustration-thank-you.svg'
// import "../App.css"
import '../styles/results.css'

function ResultsContainer({classname, score, innerClass, resultsScore, isClicked}) {
    
    function hideResults(){
        if(isClicked === true){
            return "results-ctn"
        } else {
            return "results-ctn hidden" 
        }
    }

    return (
        <div className={hideResults()}> 
            <div className={innerClass}>
                <img src={thankYouImage}></img>
                <p className={resultsScore}>You selected {score} out of 5</p>
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