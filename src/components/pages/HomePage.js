import React from 'react'
import {useState, useEffect} from 'react';
import WorkLinks from '../WorkLinks';

function HomePage() {
   

  return (
    <>
      <section>
        <h1>Hello There!</h1>
        <p>Hey there! I’m Erin and I am a Front-End Web Developer!  I like collecting records, art, and playing cool games! This is my portfolio and it contains all the cool stuff I’ve worked on! Feel free to have a look around! 
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