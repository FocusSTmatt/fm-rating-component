import { useState } from 'react'
import './App.css'
import iconstar from './images/icon-star.svg'
import thankYouImage from './images/illustration-thank-you.svg'
import { selectedRating } from './atoms';
import { useRecoilValue } from 'recoil';


function App() {
  const ratingValue = useRecoilValue(selectedRating)
  const [score, setScore] = useState()
  const [isClicked, setIsClicked] = useState(false)
  
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

  function handleClick(event) {
    setScore(event.target.value);
    console.log(event.target.value);
  }

  function hideResults(){
      if(isClicked === true){
        return "results-ctn"
      } else {
        return "results-ctn hidden" 
      }
  }

  function hideMainAfterSelect(){
    if(isClicked === true){
      return "main-ctn hidden"
    } else {
      return "main-ctn" 
    }
}
 
  
  return (
    <>
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


      <div className={hideResults()}> 
          <div className='inner-results-ctn'>
              <img src={thankYouImage}></img>
              <p className='results-score'>You selected {score} out of 5</p>
              <h3>Thank you!</h3>
              <p className='results-text'>We appreciate you taking the time to give a rating. 
                if you ever need more support, don&apos;t hesitate
                to get in touch!
              </p>
          </div>
      </div>
    </>            
  )
}

export default App
