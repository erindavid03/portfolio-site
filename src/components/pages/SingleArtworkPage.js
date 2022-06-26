import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

      <Tabs class='content-tabs' aria-label='tabs'>
        <TabList>
          <Tab>About This Piece</Tab>
          <Tab>Reflection</Tab>
        </TabList>

        <TabPanel>
          <h2>About 'TITLE'</h2>
          <p>This is stuff about the piece. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi explicabo fuga ex. Repudiandae, itaque quae cum suscipit atque perspiciatis. Fugit iure aut molestias aliquam odio dolorum quidem ducimus ab?</p>
        </TabPanel>
        <TabPanel>
          <h2>Reflection</h2>
          <p>This is a reflection. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officia ut, ullam cupiditate eos velit? Illo est aspernatur facilis qui consectetur necessitatibus inventore cum eaque, alias atque optio cupiditate animi?</p>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SingleArtwork