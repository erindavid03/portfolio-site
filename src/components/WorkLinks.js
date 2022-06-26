import React from 'react';
// insert react stuff here
import {Link} from 'react-router-dom';
// insert any images here
import ArtworkIcon from '../components/images/icons/art-icon.png';
import DevIcon from '../components/images/icons/dev-icon.png'

function WorkLinks() {
    

  return (
    <div className='work-links'>
        <Link to='/artworks'>
            <article>
                <img src={`${ArtworkIcon}`} alt="Cat holding a piece of artwork"/>
                <h3>Artworks</h3>
            </article>
        </Link>  
        <Link to='/development'>
            <article>
                <img src={`${DevIcon}`} alt="Cat holding a piece of artwork"/>
                <h3>Artworks</h3>
            </article>
        </Link>  
        
    </div>
  )
}

export default WorkLinks