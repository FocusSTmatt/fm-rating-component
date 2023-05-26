import styled from "styled-components"

export default function Rating() {


      return (
        <>
          <RatingContainer className='rating-ctn' >
             <RatingNumber>1</RatingNumber>
             <RatingNumber>2</RatingNumber>
             <RatingNumber>3</RatingNumber>
             <RatingNumber>4</RatingNumber>
             <RatingNumber>5</RatingNumber>
          </RatingContainer>
        </>  
    )
  }


const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `
const RatingNumber = styled.button`
  background: hsl(180, 2%, 25%); 
  padding: 1em 1.5em 1em 1.5em;
  font-size: 10px;
  border-radius: 50%;
  color: gray;
  
  &:hover {
    background: gray;
    color: #fff;
  }

  &:focus {
    background: hsl(25, 97%, 53%);
    color: #fff;
    outline: none;
   
  }

  
 
`