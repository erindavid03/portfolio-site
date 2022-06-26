import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useTabList, useTab, useTabPanel} from '@react-aria/tabs'

function SingleArtwork() {

  const {id} = useParams();
  const apiPath = `https://erindee.ca/erin-portfolio/wp-json/wp/v2/portfolio-artworks/${id}?acf_format=standard`;
  const [restData, setRestData] = useState({});
  const [isLoaded, setLoad] = useState(false);

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch (apiPath);
      if(response.ok){
        const data = await response.json();
        setRestData(data);
        setLoad(true);
      } else{
        setLoad(false);
      }
    };
    fetchData();
  }, [apiPath]);

  return (
    <div>
      <h1>Single Art Piece</h1>
      <img src='https://scontent.cdninstagram.com/v/t51.39111-15/287858577_181385914316665_982859940134146565_n.jpg?stp=dst-jpg_p600x600&_nc_cat=102&ccb=1-7&_nc_sid=5a057b&_nc_ohc=wfqzQ1vE-REAX-_31fW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=02_ARrt-7Hr5JgSGdqMSvpOLFTJmAhuIoyHYvgLqCrCX6Jqxg&oe=62BE0973' />
      <p>this is a little bit about my art. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis necessitatibus eius, rerum eaque ab repudiandae non magni voluptatem, ex tenetur natus perspiciatis veniam quis aut magnam? Neque, aliquid obcaecati?</p>
    </div>
  )
}

export default SingleArtwork