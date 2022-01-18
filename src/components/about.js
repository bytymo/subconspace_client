import { Fragment } from 'react';
import sky from '../images/purple-sky-moon.jpg';

export default function About() {
  return (
    <Fragment>
      <article className='p-3 bg-white text-dark'>
        <h1 className='title'>Who we are</h1>
        <p>Our mission is to cultivate peace, encourage exploration, and spread a never-ending healing ripple effect, through our coaching and conscious wellness programs. Thoughtfully curated programs are designed and provide clients with the tools to aid in the journey of, but not limited to purpose identification, creative connection, stress reduction and mental wellness.</p>
      </article>
      <div className="w-100 d-md-block" style={{ 
        height: '500px', 
        backgroundImage: `url(${sky})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} />
    </Fragment>
  )
}
