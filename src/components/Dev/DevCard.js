import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DevCard({project}) {
  const [isWide, setIsWide] = useState(
    window.matchMedia("(min-width: 64em)").matches
    );

    useEffect(() => {
      window
      .matchMedia("(min-width: 37.5em)")
      .addEventListener('change', e => setIsWide( e.matches ));
    }, []);

  return (
      <article className={isWide ? 'card' : 'card slide'}>
        <div>
            <img src={project.acf.finished_product}/> 
        </div>
        <Link to={`/development/${project.id}`}>{project.title.rendered}</Link>

        <div className='work-blurb'>
            <p>{project.acf.general_statement}</p>
            <Link to={`/development/${project.id}`}>More Info</Link>
        </div>
        
    </article>
  )
}

export default DevCard