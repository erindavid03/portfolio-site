import React from 'react';
import {useState, useEffect} from 'react';
import ArtworkCard from './ArtworkCard';
import Loading from '../images/loading.gif';

function ArtworkContainer() {
    
  const apiPath = 'https://erindee.ca/erin-portfolio/wp-json/wp/v2/portfolio-artworks?acf_format=standard';
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


  return (
    <div className='grid-contain'>
    {isLoaded === true ?
      restData.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork}/>) :
      <img src={`${Loading}`} alt="loading..." className='load'/>
    }

  </div>
  )
}

export default ArtworkContainer