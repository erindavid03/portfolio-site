import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

  if(isLoaded){
    console.log(restData);
  }

  return (
    <>
   { isLoaded ? 
   <>
     <Link to='/development'>Back to Development</Link>
        <section>
          <h1>{restData.title.rendered}</h1>  
          <div>
            <img src={`${restData.acf.finished_product}`} />
            <div>
                <h2>General Statement</h2>
                <p>{restData.acf.general_statement}</p>
                <p>Kind: <span className='media-and-size'>{restData.acf.kind}</span></p>
                <div className='button-links'>
                    <a href={`${restData.acf.live_site}`} target='_blank' rel="noopener noreferrer">View Site</a>
                    <a href={`${restData.acf.github}`} target='_blank' rel="noopener noreferrer">View Code</a>
                </div>
            </div>
          </div>
        </section>

        <section>
            <Tabs class='content-tabs' aria-label='tabs'>
                <TabList>
                  <Tab>About {restData.title.rendered}</Tab>
                  <Tab>Reflection</Tab>
                  {restData.acf.wip_pictures && <Tab>In Progress Pictures</Tab>}
                  <Tab>Key Features</Tab>
                </TabList>

                <TabPanel>
                  <h2>Goals</h2>
                  <ul className='goals'>
                    {restData.acf['goals'].map( (goal, index) => <li key={index}>{goal.goal}</li>)}
                  </ul>
                  <h2>Process</h2>
                  <p>{restData.acf.process}</p>
                </TabPanel>

                <TabPanel>
                <h2>Reflection</h2>
                <p>This is a reflection. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officia ut, ullam cupiditate eos velit? Illo est aspernatur facilis qui consectetur necessitatibus inventore cum eaque, alias atque optio cupiditate animi?</p>
                </TabPanel>

                {restData.acf.wip_pictures && <TabPanel>
                <h2>In Progress</h2>
                <p>Here are pictures during the progress</p>
                <div>
                    {restData.acf['wip_pictures'].map( wip => <img key={wip.id} src={wip.url} alt={wip.alt}/>)}
                </div>
                </TabPanel>}

                <TabPanel>
                <h2>Key Features</h2>
                <p>add your key features here?</p>
                </TabPanel>
            </Tabs>
        </section> 
        </> :
        <p>Loading...</p>
      }
    </>
  )
}

export default SingleDevPage