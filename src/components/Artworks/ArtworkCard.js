import React from 'react'

function ArtworkCard({artwork}) {
  return (
    <article>
        <div>
            <img src={artwork.acf.artwork_image}/> 
            <h2>{artwork.title.rendered}</h2>
        </div>

        <div>
            <p>{artwork.acf.general_statement}</p>
            <a href='#'>More Info</a>
        </div>
        
    </article>
  )
}

export default ArtworkCard