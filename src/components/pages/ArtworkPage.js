import React from 'react';
// import images here
import ArtBanner from '../images/art-banner.png';
// import react files here
import ArtworkContainer from '../Artworks/ArtworkContainer';

function ArtworkPage() {

  return (

    <section className='artwork'>
      <div className='page-intro'>
        <div>
          <h1>Artworks</h1>
          <p>This is where I keep all my cool artwork! I enjoy both digital and traditional media as a means to produce neat projects.  I take inspiration from old anime, psychological horror, and Wes Anderson movies. 
          I mostly use AdobePhotoshhop and FireAlpaca when drawing digitally, while my favourite traditional tool is shading pencils and acrylic paint!</p>
        </div>
        <img src={`${ArtBanner}`} alt="drawing kitty cat" />
      </div>
  
      <ArtworkContainer />
    </section>
  )
}

export default ArtworkPage