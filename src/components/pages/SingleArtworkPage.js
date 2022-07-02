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
    <>
    <section>
      <h1>Single Art Piece Title</h1>
      <div>
        <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
        <div>
          <h2>General info</h2>
          <p>this is a little bit about my art. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis necessitatibus eius, rerum eaque ab repudiandae non magni voluptatem, ex tenetur natus perspiciatis veniam quis aut magnam? Neque, aliquid obcaecati?</p>
          <p className='media-and-size'>Traditional || 8.5 x 11</p>
        </div>
      </div>
      
      <div>
        <h2>Tools Used</h2>
        <ul>
          <li>Pencil</li>
          <li>Eraser</li>
          <li>Crayons</li>
        </ul>
      </div>

     </section>

    <section>
      <Tabs class='content-tabs' aria-label='tabs'>
        <TabList>
          <Tab>About This Piece</Tab>
          <Tab>Reflection</Tab>
          <Tab>In Progress Pictures</Tab>
        </TabList>

        <TabPanel>
          <h2>About 'TITLE'</h2>
          <p>This is stuff about the piece. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi explicabo fuga ex. Repudiandae, itaque quae cum suscipit atque perspiciatis. Fugit iure aut molestias aliquam odio dolorum quidem ducimus ab?</p>
        </TabPanel>
        <TabPanel>
          <h2>Reflection</h2>
          <p>This is a reflection. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officia ut, ullam cupiditate eos velit? Illo est aspernatur facilis qui consectetur necessitatibus inventore cum eaque, alias atque optio cupiditate animi?</p>
        </TabPanel>
        <TabPanel>
          <h2>In Progress</h2>
          <p>Here are pictures during the progress</p>
          <div>
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
              <img src='https://i.kym-cdn.com/photos/images/newsfeed/002/205/307/1f7.jpg' />
          </div>

        </TabPanel>
      </Tabs>
    </section>
    </>
  )
}

export default SingleArtwork