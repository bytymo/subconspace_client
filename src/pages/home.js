import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import light_purple from '../images/lotus-purple-2.png';

import Header from '../components/header';
import Footer from '../components/footer';

import Divider from '../components/divider';
import NewsletterModal from '../modals/newsletter-modal';

const Home = () => {
  const bookWill = 'https://calendly.com/subconcoaching/15';
  const bookTina = 'https://calendly.com/subconcoachtina/15min';

  return (
    <Fragment>
      <Header />
      <NewsletterModal />
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsletter">
        Launch newsletter ad
      </button>
      <div className="d-grid gap-3 w-100">
        <article className='p-3 bg-white text-dark'>
        <h2 className='title'>Who we are</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error exercitationem optio cupiditate aperiam sed sequi, officia ipsam impedit minima rem veritatis. Voluptatibus perferendis ipsam illum doloribus quasi magni dignissimos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui laudantium. Minus fuga inventore accusamus neque a, iure nesciunt aliquam veritatis fugiat laborum et consequuntur pariatur ratione quibusdam alias autem aut voluptates doloremque provident nam. Assumenda, officia! Ipsa sint facere omnis reprehenderit odio? Facere obcaecati quae ipsum assumenda, quaerat recusandae.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil doloribus consequatur suscipit adipisci expedita ex porro atque fugiat incidunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur deserunt dignissimos et accusamus facere odit doloremque, neque eos voluptatem asperiores illo voluptatibus nam eum quo placeat consequuntur totam eveniet odio? Modi totam eum nobis neque qui? Excepturi, numquam velit!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores in assumenda mollitia quidem odio reprehenderit neque recusandae voluptatum cum, dicta magnam maxime quisquam porro! Ea aut, nesciunt iure hic eligendi maxime blanditiis voluptate beatae quas quam! Enim veritatis ratione culpa voluptatibus repellendus quo, mollitia eos sit eius quis, voluptas accusamus!</p>
        </article>
        {/* <Divider /> */}
        <h2 className='title'>Meet the coaches</h2>
        <h3>Will Plantillas</h3>
        <article id="will" className='m-0 row d-flex justify-content-end profile-bg'>
          <div className='py-3 col-12 col-md-7 float-md-start background-tint text-white'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error exercitationem optio cupiditate aperiam sed sequi, officia ipsam impedit minima rem veritatis. Voluptatibus perferendis ipsam illum doloribus quasi magni dignissimos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui laudantium. Minus fuga inventore accusamus neque a, iure nesciunt aliquam veritatis fugiat laborum et consequuntur pariatur ratione quibusdam alias autem aut voluptates doloremque provident nam. Assumenda, officia! Ipsa sint facere omnis reprehenderit odio? Facere obcaecati quae ipsum assumenda, quaerat recusandae.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil doloribus consequatur suscipit adipisci expedita ex porro atque fugiat incidunt?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur deserunt dignissimos et accusamus facere odit doloremque, neque eos voluptatem asperiores illo voluptatibus nam eum quo placeat consequuntur totam eveniet odio? Modi totam eum nobis neque qui? Excepturi, numquam velit!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores in assumenda mollitia quidem odio reprehenderit neque recusandae voluptatum cum, dicta magnam maxime quisquam porro! Ea aut, nesciunt iure hic eligendi maxime blanditiis voluptate beatae quas quam! Enim veritatis ratione culpa voluptatibus repellendus quo, mollitia eos sit eius quis, voluptas accusamus!</p>
            <Link className='btn btn-primary' to={{pathname: '/agreement', state: {url: bookWill}}}>Book Will</Link>
          </div>
        </article>
        <div className="justify-content-center">
          <img className='align-middle' src={light_purple} alt="light purple lotus flower divider" width='80px' />
        </div>
        <h3>Tina Plantillas</h3>
        <article id="tina" className='m-0 row d-flex justify-content-end profile-bg'>
          {/* <div className='py-3 col-12 col-md-3 tinaProfile' />
          <div className="col-md-1"></div> */}
          <div className='py-3 col-12 col-md-7 background-tint text-white'>
            <p>Tina Plantillas is a Certified Spiritual Life Coach, Yoga and Meditation Teacher, Movement facilitator, and Commercial Credit Corporate extraordinaire.</p>
            <p>Tina’s curiosity for self improvement started at a young age always picking up a self-help book from the book store. In exploration to find a way to get into better shape she found yoga in 2010, unexpectedly discovering the mind-body connection that would change her life.</p>
            <p>Tina obtained her 200 hour Yoga Teacher training certification in 2012 and began guiding amateur and professional athletes, bringing her relaxation techniques to high level corporate employees, as well as facilitating movement events at the Phoenix Art Museum.</p>
            <p>Her empathic soul has lead her on a journey of service. Whether that involves guiding a mindful yoga class to corporate associates or coaching clients through the struggle of trying to find their soul’s purpose. Tina believes that to be truly happy one must be able to be open and connect to their highest self.</p>
            <p>Tina’s goal in life is to serve with love, and help others learn to love themselves on a deeper level. She helps her clients find joy in order to create a life that feels aligned with their souls. Her passion is assisting clients to be kind, patient, and compassionate to themselves and others.</p>
            <Link className='btn btn-primary' to={{pathname: '/agreement', state: {url: bookTina}}}>Book Tina</Link>
          </div>
        </article>
        <Divider />
        <article id="questionnaire" className='mb-5'>
          <h3 className='title'>Not sure who?</h3>
          <p>Don't worry if you aren't sure what you are looking for. Click the link below to take a quick two question survey and we will determine the best course of action.</p>
          <Link to={{pathname: '/booking', state: {bookWill: bookWill, bookTina: bookTina}}} className="btn btn-primary">Take survey</Link>
        </article>

        <article className='px-3 bg-white text-dark'>
          <h1>TESTIMONIAL SECTION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus totam, facere unde amet tempora odio quidem sequi accusamus debitis, tempore adipisci dolor atque aut molestiae fugit est sed placeat ducimus hic nisi? Quo possimus sunt consequuntur hic saepe repellendus quia corrupti.
          </p>
          <p>
            Minus cumque autem quas voluptatibus. Consectetur sequi odit sunt cumque ducimus quod ea officia non. Ex libero culpa saepe nulla cum in maiores repellendus nihil corporis recusandae dolorem excepturi, adipisci praesentium voluptatum pariatur quam sit animi mollitia. Consequatur provident nisi quo non numquam amet quis architecto omnis, quas facere veritatis voluptatem soluta. Adipisci molestias dolorum nulla ipsum, odit repellat.
          </p>
        </article>
      </div>
      <Divider />
      <Footer />
    </Fragment>
  )
}

export default Home
