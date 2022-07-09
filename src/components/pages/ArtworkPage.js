import React from 'react';
// import images here
import ArtBanner from '../images/art-banner.png';
// import react files here
import ArtworkContainer from '../Artworks/ArtworkContainer';
import { Helmet } from 'react-helmet';

function ArtworkPage() {

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Erin Dee | Artworks</title>
      <meta name="description" content="This is my really cool, totally serious art >:)" />
    </Helmet>
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
    </>
  )
}

export default ArtworkPage