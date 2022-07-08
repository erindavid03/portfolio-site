import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import KeyFeatures from '../Dev/KeyFeatures';
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/style.css';


function SingleDevPage() {

  const {id} = useParams();
  const apiPath = `https://erindee.ca/erin-portfolio/wp-json/wp/v2/portfolio-projects/${id}?acf_format=standard`;
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
     <Link to='/development' className='back-to-menu'>Back to Development</Link>
     <h1>{restData.title.rendered}</h1>  
        <section className='piece-about'>
          <div className='general-info'>
            <img src={`${restData.acf.finished_product}`} />
            <div>
                <h2>General Statement</h2>
                <p>{restData.acf.general_statement}</p>
                <p className='grey'>Kind: <span className='media-and-size'>{restData.acf.kind}</span></p>
                <div className='button-links'>
                    <a href={`${restData.acf.live_site}`} target='_blank' rel="noopener noreferrer">View Site</a>
                    <a href={`${restData.acf.github}`} target='_blank' rel="noopener noreferrer">View Code</a>
                </div>
                
            </div>
          </div>
        </section>

        <section className='piece-tabs'>
            <Tabs class='content-tabs' aria-label='tabs'>
                <TabList>
                  <Tab>About {restData.title.rendered}</Tab>
                  <Tab>Reflection</Tab>
                  <Tab>Key Features</Tab>
                  {restData.acf.wip_pictures && <Tab>In Progress Pictures</Tab>}
                </TabList>

                <TabPanel>
                  <h2>Goals</h2>
                  <ul className='goals'>
                    {restData.acf['goals'].map( (goal, index) => <li key={index}>{goal.goal}</li>)}
                  </ul>
                  <h2>Tools Used:</h2>
                  <ul>
                    { restData.acf['tools'].map( (tool, index) => <li key={index}>{tool.tool_name}</li>)}
                  </ul>
                </TabPanel>

                <TabPanel>
                    <h2>Reflection</h2>
                    <p>{restData.acf.reflection}</p>
                </TabPanel>

                <TabPanel>
                  <h2>Key Features</h2>
                  <p>Theses are some of my favourite features from {restData.title.rendered}!</p>
                  {restData.acf['favourite_features'].map( (feature, index) => <KeyFeatures key={index} feature={feature}/>)}
                </TabPanel>

                {restData.acf.wip_pictures && 
                <TabPanel>
                  <h2>In Progress</h2>
                  <p>Here are pictures during the development progress!</p>
                  <div className='gallery'>
                    <Gallery id='gallery--wip'>
                        {restData.acf['wip_pictures'].map( wip => 
                            <Item
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
        </> :
        <p>Loading...</p>
      }
    </>
  )
}

export default SingleDevPage