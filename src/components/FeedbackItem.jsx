import { useEffect } from "react";
import { useState } from "react";

function FeedbackItem()
{
    const [rating,setRating]=useState(7)
    const [text,setText]=useState('This is an example of feedback item')

    useEffect(()=>{
        const val=7;        
        setRating(val+1);
        console.log(val,rating);
    },[rating]);

    
    return (
        <div className="card">
                <div className='num-display'>{rating}</div>
                <div className='text-display'>{text}</div>
        </div>
    )
}

export default FeedbackItem