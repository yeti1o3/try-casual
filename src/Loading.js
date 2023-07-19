import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './Loading.css'

function Loading() {
  return (
    <div className='loading__Animation'>
        
<ClimbingBoxLoader
  color="tomato"
  size={30}
  speedMultiplier={1}
/>
    </div>
  )
}

export default Loading