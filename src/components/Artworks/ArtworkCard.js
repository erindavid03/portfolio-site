import React from 'react'
import {Link} from 'react-router-dom';

function ArtworkCard({artwork}) {

  console.log(artwork.acf.artwork_image);
  return (
    <article>
        <div>
            <img src={artwork.acf.artwork_image}/> 
            <h2>{artwork.title.rendered}</h2>
        </div>

        <div>
            <p>{artwork.acf.general_statement}</p>
            <Link to={`/artworks/${artwork.id}`}>More Info</Link>
        </div>
        
    </article>
  )
}

export default ArtworkCard