import {AiFillStar,AiOutlineStar} from "react-icons/ai";


import React from 'react'

const Rating = ({rating,onClick,style}) => {
  return (
    <>
    {[...Array(5)].map((_,i)=>(
        <span className="ratingmedia" key={i} onClick={()=> {onClick(i+1)}
        } style={style}>
            {rating>i?(
            <AiFillStar fontSize="15px"/>) : (<AiOutlineStar fontSize="15px"/>)}
            
            
            
            </span>
    ))}
    
    </>
  )
}

export default Rating