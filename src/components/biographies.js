import { Link } from 'react-router-dom';

import tinaProfile from '../images/tinaProfile.jpg';
import willProfile from '../images/willProfile.jpg';

import LotusDivider from '../components/lotusDivider';


export default function Biographies() {
  const bookWill = 'https://calendly.com/subconcoaching/15';
  const bookTina = 'https://calendly.com/subconcoachtina/15min';
  return (
    <section className='bg-dark py-3'>
      <h1 className='title'>Meet the coaches</h1>
      <h2>Tina Plantillas</h2>
      <article id="tina" className='m-0 row d-flex justify-content-end profile-bg'>
        <div className="py-3 col-12 col-lg-3 m-auto">
          <img src={tinaProfile} alt="Head profile of Tina Plantillas" className="profileImg m-auto" />
        </div>
        <div className='py-3 col-12 col-lg-7'>
          <p>Tina Plantillas is a Certified Spiritual Life Coach, Yoga and Meditation Teacher, Movement facilitator, and Commercial Credit Corporate extraordinaire.</p>
          <p>Tina’s curiosity for self improvement started at a young age always picking up a self-help book from the book store. In exploration to find a way to get into better shape she found yoga in 2010, unexpectedly discovering the mind-body connection that would change her life.</p>
          <p>Tina obtained her 200 hour Yoga Teacher training certification in 2012 and began guiding amateur and professional athletes, bringing her relaxation techniques to high level corporate employees, as well as facilitating movement events at the Phoenix Art Museum.</p>
          <p>Her empathic soul has lead her on a journey of service. Whether that involves guiding a mindful yoga class to corporate associates or coaching clients through the struggle of trying to find their soul’s purpose. Tina believes that to be truly happy one must be able to be open and connect to their highest self.</p>
          <p>Tina’s goal in life is to serve with love, and help others learn to love themselves on a deeper level. She helps her clients find joy in order to create a life that feels aligned with their souls. Her passion is assisting clients to be kind, patient, and compassionate to themselves and others.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-evenly">
            <Link className='btn btn-primary' to={{pathname: '/agreement', state: {url: bookTina}}}>Book Tina</Link>
            <Link className='btn btn-secondary' to={{pathname: '/book'}}>Purchase book</Link>
          </div>
        </div>
      </article>
      <LotusDivider />
      <h2>Will Plantillas</h2>
      <article id="will" className='m-0 h-100 row d-flex justify-content-end profile-bg'>
        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center px-0 w-md-100 m-md-auto">
          <img src={willProfile} alt="Head profile of Will Plantillas" className="profileImgAlt px-0" />
        </div>
        <div className='py-3 col-12 col-lg-7'>
          <p>Will Plantillas is a Certified Plant-Based Nutrition Coach, Certified Personal Trainer, Mindset/Creative Coach and Luxury sales expert.</p>
          <p>Will began his wellness journey in 2011 when his own health was in danger.  His health scare drove him to find ways to incorporate movement and better eating habits into his lifesyle.  With his own success he pursued the certifications in order to expand his knowledge base and share with as many souls as possible.</p>
          <p>Will spent years training in martial arts and also coaching amatuer and professional athletes.  It began with physically training fighters and evolved into the total package of physical, mental, and emotional wellness.  Will works to develop his clients holistically with a natural approach.  His own experience has led him to a path of service to support clients to evolve to the best version of themselves.</p>
          <p>Will has unmatched creativity; whether that comes in the form of project management, career in music, or with his art and spoken words.  His goal is to support other creatives in their journey of self improvement.</p>
          <Link className='btn btn-primary' to={{pathname: '/agreement', state: {url: bookWill}}}>Book Will</Link>
        </div>
      </article>

      <LotusDivider />

      <article id="questionnaire" className='mb-5'>
        <h2 className='title'>Not sure who?</h2>
        <p>Don't worry if you aren't sure what you are looking for. Click the link below to take a quick two question survey and we will determine the best course of action.</p>
        <Link to={{pathname: '/booking', state: {bookWill: bookWill, bookTina: bookTina}}} className="btn btn-primary">Take survey</Link>
      </article>
    </section>
  )
}
