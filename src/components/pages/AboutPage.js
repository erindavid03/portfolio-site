import React from 'react';
import HeroImage from '../images/me-picture.png';

function AboutPage() {
  return (
  <>
    <div className='about'>
      <section>
        <h1>About Me</h1>
        <div className='page-intro'>
          <img src={HeroImage} alt="an image of a girl holding a cat" />
          <div>
            <h2>Hi there! Im Erin {':)'}</h2>
            <p>I am a Front-End Web Developer from the lower mainland with a passion for designing original creations. Whether it be a website or an art piece, I ensure that all my work is thoughtful, creative, and polished!
              Since I grew up around the time that the internet was in its heyday, a lot of my inspiration comes from early 2000s nostalgia and modern-day aesthetics. 
              After gaining an in-depth understanding of the best practices in UX/UI Design and Web Development, it is a personal goal for me to create sites that are pleasing to look at, and take you back to the joys of growing up with the internet!
              When I am not around my computer, I enjoy doodling away in my sketchbooks while spinning my favourite records from my collection! Either that or I’m plotting my next plan for world domination with my army of burnt toast {'>:D'}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>My skills {'<3'}</h2>
        <div>
          <article>
            <h3>Development</h3>
            <ul>
              <li>React</li>
              <li>PHP</li>
              <li>WordPress</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>jQuery</li>
            </ul>
          </article>
          

          <article>
            <h3>Design</h3>
              <ul>
                <li>Adobe XD</li>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>InVision</li>
              </ul>
            </article>

          <article>
            <h3>Art</h3>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Premiere</li>
              <li>Adobe Animate</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  </>
  )
}

export default AboutPage