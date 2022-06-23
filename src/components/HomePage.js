import React from 'react'
import {useState, useEffect} from 'react';

function HomePage() {
    const restPath = 'http://localhost/portfolio-project/wp-json/wp/v2/pages/8?_embed';
    const [restData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
            } 
        }
        fetchData()
    }, [restPath])

    console.log(restData.content);

  return (
    <div>
        <h1>hello</h1>
        <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}></div>
    </div>
  )
}

export default HomePage