import React from 'react'
import LoadingGif from '../components/images/loading.gif';

function Loading() {
  return (
    <div className='load'>
        <img src={`${LoadingGif}`} alt="loading..."/>
    </div>
  )
}

export default Loading