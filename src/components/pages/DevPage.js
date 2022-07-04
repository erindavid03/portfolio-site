import React from 'react';
import DevBanner from '../images/dev-banner.png';
import DevContain from '../Dev/DevContain';

function DevPage() {
  return (
    <section className='development'>
      
      <div className='page-intro'>
      <h1>Development</h1>
        <p>These are all some of my development projects! I am quite versatile when it comes to what I do in development — I like both coding and design, but I lean towards design more. I take a lot of inspiration from old internet aesthetics and art when it comes to design!
          In terms of where I like to develop, I like React the most, but I also dabble on WordPress development {'(❁´◡`❁)'}</p>

        <img src={`${DevBanner}`} alt="an Image of a cat coding" />
      </div>

    
        <DevContain />
    </section>
  )
}

export default DevPage