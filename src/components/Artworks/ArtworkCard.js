import React from 'react'

function ArtworkCard({artwork}) {
  return (
    <article>
        <h2>{artwork.title.rendered}</h2>
    </article>
  )
}

export default ArtworkCard