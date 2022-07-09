import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Loading from '../../components/Loading';
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
    <Link to='/artwork' className='back-to-menu'>Back to Artwork</Link>
    <section className='piece-about'>
      <h1>{restData.title.rendered}</h1>
      <div className='general-info'>
        <Gallery id='finished-prod'>
          <Item
              original={restData.acf.artwork_image.url}
              thumbnail={restData.acf.artwork_image.sizes.medium}
              width={restData.acf.artwork_image.width}
              height={restData.acf.artwork_image.height}> 
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={restData.acf.artwork_image.sizes.medium} alt={restData.acf.artwork_image.alt} />
            )}
          </Item>
        </Gallery>
        <div>
          <h2>General info</h2>
          <p>{restData.acf.general_statement}</p>
          <p className='grey'> {restData.acf.kind} || {restData.acf.dimensions}</p>
        </div>
      </div>
      

     </section>

    <section className='piece-tabs'>
      <Tabs className='content-tabs' aria-label='tabs'>
        <TabList>
          <Tab>About</Tab>
          <Tab>Reflection</Tab>
          {restData.acf.wip_pictures && <Tab>In Progress Pictures</Tab>}
        </TabList>

        <TabPanel>
          <h2>Tools Used</h2>
          <ul>
          { //this outputs the tools used acf repeater field. make sure you give it a key (index) and use the array thing as supposed to acf.tools
          restData.acf['tools'].map( (tool, index) => <li key={index}>{tool.tools_used}</li>)}
          </ul>
          <h2>About {restData.title.rendered}</h2>
          <p>{restData.acf.about_this_piece}</p>
        </TabPanel>

        <TabPanel>
          <h2>Reflection</h2>
          <p>{restData.acf.reflection}</p>
        </TabPanel>

        { restData.acf.wip_pictures && 
        <TabPanel>
          <h2>Cool Pictures</h2>
          <p>Here are pictures during the progress!</p>
          <div className='gallery'>
                    <Gallery id='gallery--wip'>
                        {restData.acf['wip_pictures'].map( wip => 
                            <Item
                                key={wip.id}
                                original={wip.url}
                                thumbnail={wip.sizes.thumbnail}
                                width={wip.width}
                                height={wip.height}> 
                              {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={wip.sizes.thumbnail} alt={wip.alt} />
                              )}
                            </Item>
                          )}
                    </Gallery>
                  </div>
        </TabPanel>}
      </Tabs>
    </section> 
    </>: 
  
    <Loading />}
    </>
  )
}

export default SingleArtwork