import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function SingleArtwork() {

  const {id} = useParams();
  const apiPath = `https://erindee.ca/erin-portfolio/wp-json/wp/v2/portfolio-artworks/${id}?acf_format=standard`;
  const [restData, setRestData] = useState([]);
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
    { isLoaded ? 
    <>
    <Link to='/artwork'>Back to Artwork</Link>
    <section>
      <h1>{restData.title.rendered}</h1>
      <div>
        <img src={`${restData.acf.artwork_image}`} />
        <div>
          <h2>General info</h2>
          <p>{restData.acf.general_statement}</p>
          <p className='media-and-size'> {restData.acf.kind} || {restData.acf.dimensions}</p>
        </div>
      </div>
      
      <div>
        <h2>Tools Used</h2>
        <ul>
        { //this outputs the tools used acf repeater field. make sure you give it a key (index) and use the array thing as supposed to acf.tools
        restData.acf['tools'].map( (tool, index) => <li key={index}>{tool.tools_used}</li>)}
        </ul>
      </div>

     </section>

    <section>
      <Tabs className='content-tabs' aria-label='tabs'>
        <TabList>
          <Tab>About</Tab>
          <Tab>Reflection</Tab>
          {restData.acf.wip_pictures && <Tab>In Progress Pictures</Tab>}
        </TabList>

        <TabPanel>
          <h2>About {restData.title.rendered}</h2>
          <p>{restData.acf.about_this_piece}</p>
        </TabPanel>
        <TabPanel>
          <h2>Reflection</h2>
          <p>{restData.acf.reflection}</p>
        </TabPanel>
        { restData.acf.wip_pictures && <TabPanel>
          <h2>In Progress</h2>
          <p>Here are pictures during the progress</p>
          <div>

          </div>

        </TabPanel>}
      </Tabs>
    </section> 
    </>: 
  
    <p>loading... </p>}
    </>
  )
}

export default SingleArtwork