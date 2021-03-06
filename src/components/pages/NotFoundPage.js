import React from 'react';
import WorkLinks from '../WorkLinks';
import { Helmet } from 'react-helmet';

function NotFoundPage() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Erin Dee | 404</title>
    </Helmet>
    <section className='not-found'>
      <h1>Whats this? An empty room!</h1>
      <p>Thats a bummer! looks like we don't have what you are looking for ;{'('} unless, of course, you were looking for nothing the whole time!
          In that case, congratulations! You've found nothing :D</p>

      <h2>Maybe try looking here for something super awesome {'(:'}</h2>
      <WorkLinks/>
      
      </section>
    </>
  )
}

export default NotFoundPage