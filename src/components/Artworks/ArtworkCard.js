import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';


function ArtworkCard({artwork}) {

   // Shortens description to maintain card info positioning
  const shortDesc = artwork.acf.general_statement.substring(0, 90) + ' ...';

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
            <img src={artwork.acf.artwork_image.url}/> 
        </div>
        {!isWide && <Link to={`/artworks/${artwork.id}`}>{artwork.title.rendered}</Link>}

        <div className='work-blurb'>
            <p>{artwork.title.rendered} || {artwork.acf.kind}</p>
            <p>{artwork.acf.general_statement.length > 20 && shortDesc}</p>
            <Link to={`/artworks/${artwork.id}`}>More Info</Link>
        </div>
        
    </article>
  )
}

export default ArtworkCard