import React from 'react'
import WorkLinks from '../WorkLinks';
import CatSit from '../images/cat-sit.png';
import { Helmet } from 'react-helmet';

function HomePage() {
   

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Erin Dee</title>
        <meta name="description" content="Welcome to my world! My name is Erin David, I like to code, draw, play old games and listen to music!" />
      </Helmet>
      <section className='intro-section'>
        <div>
          <h1>Hi there!</h1>
          <p>I am a Front-End Web Developer! I like collecting records, art, and playing cool games! This is my portfolio and it contains all the cool stuff I’ve worked on! Feel free to have a look around! 
            Perhaps you'll find something super cool! {':)'}
          </p>
        </div>

        <img src={`${CatSit}`} alt="sitting cat" />
      </section>

      <section>
        <h2>Checkout my cool cool stuff {'<3'}</h2>
        <WorkLinks />
      </section>
    </>
  )
}

export default HomePage