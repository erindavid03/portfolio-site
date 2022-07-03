import React from 'react'
import WorkLinks from '../WorkLinks';

function HomePage() {
   

  return (
    <>
      <section>
        <h1>Hi there!</h1>
        <p>I am a Front-End Web Developer! I like collecting records, art, and playing cool games! This is my portfolio and it contains all the cool stuff I’ve worked on! Feel free to have a look around! 
          Perhaps you'll find something super cool! {':)'}
        </p>
      </section>

      <section>
        <h2>Checkout my cool cool stuff {'<3'}</h2>
        <WorkLinks />
      </section>
    </>
  )
}

export default HomePage