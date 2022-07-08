import React from 'react'
import Loading from '../images/loading.gif';

function Loading() {
  return (
    <div className='load'>
        <img src={`${Loading}`} alt="loading..." className='load'/>
    </div>
  )
}

export default Loading