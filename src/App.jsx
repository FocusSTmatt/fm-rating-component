import { useState } from 'react'
import './App.css'
import './styles/rating.css'
import iconstar from './images/icon-star.svg'
import thankYouImage from './images/illustration-thank-you.svg'
import { selectedRating } from './atoms';
import { useRecoilValue } from 'recoil';
import ResultsContainer from './components/ResultsContainer';
import RatingSelectionWindow from './components/RatingSelectionWindow';


function App() {
  const ratingValue = useRecoilValue(selectedRating)
  const [score, setScore] = useState()
  const [isClicked, setIsClicked] = useState(false)
  
  return (
    <>
      <RatingSelectionWindow
        score={score}
        setScore={setScore}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        ratingValue={ratingValue} 
      />

      <ResultsContainer 
        innerClass="inner-results-ctn"
        resultsScore="results-score" 
        score={score}
        isClicked={isClicked} 
      />
    </>            
  )
}

export default App
