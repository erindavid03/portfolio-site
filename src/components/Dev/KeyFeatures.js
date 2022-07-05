import React from 'react';

function KeyFeatures( {feature} ) {
  return (
    <div>
        <h3>{feature.feature_title}</h3>
        <p>{feature.feature_details}</p>
       {feature.feature_clip && <img src={`${feature.feature_clip}`} alt =''/>}
    </div>
  )
}

export default KeyFeatures