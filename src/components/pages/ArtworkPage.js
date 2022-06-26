import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
// import images here
import ArtBanner from '../images/art-banner.png';

function ArtworkPage() {

  const apiPath = 'https://erindee.ca/erin-portfolio/wp-json/wp/v2/portfolio-artworks';
  const [restData, setRestData] = useState([]);
  const [isLoaded, setLoad] = useState(false);

  useEffect( () =>{
    const fetchData = async () =>{
      const response = await fetch (apiPath);
      if(response.ok){
        const data = await response.json();
        setRestData(data);
        setLoad(true);
      } else{
        setLoad(false);
      }
    }
    fetchData();
  }, [apiPath]) 

if(isLoaded === false){
  console.log('react u failed me');
} else{
  console.log('yay! it worked!')
}
  return (

    <div>
      <div>
        <h1>Artworks</h1>
        <p>This is where I keep all my cool artwork! I enjoy both digital and traditional media as a means to produce neat projects.  I take inspiration from old anime, psychological horror, and Wes Anderson movies. 
        I mostly use AdobePhotoshhop and FireAlpaca when drawing digitally, while my favourite traditional tool is shading pencils and acrylic paint!</p>

        <img src={`${ArtBanner}`} alt="Image of Cat drawing" />
      </div>
  
      <div>
        {isLoaded === true ?

          restData.map(artwork => <h2 key={artwork.id}>{artwork.title.rendered}</h2>) :
          <p>Loading...</p>
        }

      </div>
    </div>
  )
}

export default ArtworkPage