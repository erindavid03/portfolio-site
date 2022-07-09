import React from 'react';

function KeyFeatures( {feature} ) {
  return (
    <article className='feature-grid'>
      <div>
        <h3>{feature.feature_title}</h3>
        <p>{feature.feature_details}</p>
      </div>
       {feature.feature_clip && <img src={`${feature.feature_clip.url}`} alt ={feature.feature_clip.alt}/>}
    </article>
  )
}

export default KeyFeatures