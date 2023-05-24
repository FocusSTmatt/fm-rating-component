import {useState} from 'react'
import "../styles/rating.css"



export default function Rating() {
  const [isActive, setIsActive] = useState({activeObject: null});
  const [color, setColor] = useState({color: "red"});
  function toggleActive(index){
    setIsActive({...isActive, activeObject: ratingArray[index]})
  }

  function toggleActiveClass(index){
    if(isActive.activeObject === ratingArray[index]){
      return "ratings active"
    } else {
      return "ratings"
    }
  }


  const ratingArray = [1, 2, 3, 4, 5];
    const getRatingArray = ratingArray.map((rating, index) => {
      return <span className='rating-number' key={index}>{rating}</span>
    })

      return (
        <>
          <div className='rating-ctn' >
            {getRatingArray} 
          </div>
        </>  
    )
  }



