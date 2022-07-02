import React from 'react';
import { Link } from 'react-router-dom';

function DevCard({project}) {
  return (
    <div>
      <article>
        <div>
            <img src={project.acf.finished_product}/> 
            <h2>{project.title.rendered}</h2>
        </div>

        <div>
            <p>{project.acf.general_statement}</p>
            <Link to='/development/:id'>More Info</Link>
        </div>
        
    </article>
    </div>
  )
}

export default DevCard