import React from 'react';
// insert react stuff here
import {Link} from 'react-router-dom';
import { useState } from 'react';
// insert any images here
import ArtworkIcon from '../components/images/icons/art-icon.png';
import ArtworkHover from '../components/images/icons/art-icon-hover.gif';
import DevIcon from '../components/images/icons/dev-icon.png'
import DevHover from '../components/images/icons/dev-icon-hover.gif';

function WorkLinks() {
    
    const [hoverCheck, setHoverCheck] = useState(false);
    const [hoverCheckDev, setHoverCheckDev] = useState(false);


  return (
    <div className='work-links'>
        <Link to='/artworks'
        onMouseOver={()=>setHoverCheck(true)}
        onMouseOut={()=>setHoverCheck(false)}>
            <article>
                <img 
                 src={hoverCheck ? `${ArtworkHover}` : `${ArtworkIcon}`} alt="Cat holding a piece of artwork"/>
                <h3>Artworks</h3>
            </article>
        </Link>  
        <Link to='/development'
        onMouseOver={()=>setHoverCheckDev(true)}
        onMouseOut={()=>setHoverCheckDev(false)}>
            <article>
                <img src={hoverCheckDev ? `${DevHover}` : `${DevIcon}`} alt="Cat using computer"/>
                <h3>Development</h3>
            </article>
        </Link>  
        
    </div>
  )
}

export default WorkLinks