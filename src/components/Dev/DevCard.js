import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DevCard({project}) {
 // Shortens description to maintain card info positioning
 const shortDesc = project.acf.general_statement.substring(0, 100) + ' ...';

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
            <img src={project.acf.finished_product}/> 
        </div>
        {!isWide && <Link to={`/development/${project.id}`}>{project.title.rendered}</Link>}

        <div className='work-blurb'>
            <p>{project.title.rendered} || {project.acf.kind}</p>
            <p>{project.acf.general_statement.length > 20 && shortDesc}</p>
            <Link to={`/development/${project.id}`}>More Info</Link>
        </div>
    </article>
  )
}

export default DevCard