import React from 'react'
import '../App.css'
import '../styles/rating.css'
import iconstar from '../images/icon-star.svg'
import Rating from './Rating'

function RatingSelectionWindow({isClicked, score, setScore, setIsClicked, ratingValue}) {

        function handleClick(event) {
            setScore(event.target.value);
            console.log(event.target.value);
        }

        function onSubmitClick(){
            if(score){
              setIsClicked(true);
            }
              
            if(isClicked === true){
              setIsClicked(false);
            }
            console.log(isClicked)
            console.log(ratingValue)
          }
        
        function hideMainAfterSelect(){
            if(isClicked === true){
            return "main-ctn hidden"
            } else {
            return "main-ctn" 
            }
        }
  return (
    <div className={hideMainAfterSelect()}>
        <div className='inner-ctn'>
        <img className='star-icon' src={iconstar} />
        <h3>How did we do?</h3>
        <p className='text'>Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
        </p>
        <div className='rating-ctn'>
            <input className='rating-number' type="submit" onClick={handleClick} value="1" />
            <input className='rating-number' type="submit" onClick={handleClick} value="2" />
            <input className='rating-number' type="submit" onClick={handleClick} value="3" />
            <input className='rating-number' type="submit" onClick={handleClick} value="4" />
            <input className='rating-number' type="submit" onClick={handleClick} value="5" />
        </div>
        <button onClick={onSubmitClick} className='btn'>SUBMIT</button>
        </div> 
    </div>
  )
}

export default RatingSelectionWindow