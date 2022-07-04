import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';


function ArtworkCard({artwork}) {
  const [isWide, setIsWide] = useState(
    window.matchMedia("(min-width: 64em)").matches
    );

    useEffect(() => {
      window
      .matchMedia("(min-width: 64em)")
      .addEventListener('change', e => setIsWide( e.matches ));
    }, []);

  return (
    <article className={isWide ? 'card' : 'card slide'}>
        <div>
            <img src={artwork.acf.artwork_image}/> 
        </div>
        <Link to={`/artworks/${artwork.id}`}>{artwork.title.rendered}</Link>

        <div className='work-blurb'>
            <p>{artwork.acf.general_statement}</p>
            <Link to={`/artworks/${artwork.id}`}>More Info</Link>
        </div>
        
    </article>
  )
}

export default ArtworkCard