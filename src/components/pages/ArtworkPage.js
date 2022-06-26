import React from 'react';
import {Link} from 'react-router-dom';
// import images here
import ArtBanner from '../images/art-banner.png';

function ArtworkPage() {
  return (
    <div>
      <div>
        <h1>Artworks</h1>
        <p>This is where I keep all my cool artwork! I enjoy both digital and traditional media as a means to produce neat projects.  I take inspiration from old anime, psychological horror, and Wes Anderson movies. 
        I mostly use AdobePhotoshhop and FireAlpaca when drawing digitally, while my favourite traditional tool is shading pencils and acrylic paint!</p>

        <img src={`${ArtBanner}`} alt="Image of Cat drawing" />
      </div>

    

      <div>

      </div>
    </div>
  )
}

export default ArtworkPage