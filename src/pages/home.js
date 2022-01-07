import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import tinaProfile from '../images/tinaProfile.jpg';

import Header from '../components/header';
import Footer from '../components/footer';
import LotusDivider from '../components/lotusDivider';

import Divider from '../components/divider';
import NewsletterModal from '../modals/newsletter-modal';

const Home = () => {
  const bookWill = 'https://calendly.com/subconcoaching/15';
  const bookTina = 'https://calendly.com/subconcoachtina/15min';
  let btn;

  useEffect(() => {
    setTimeout(function(){ btn.click(); }, 10000); // 10 second delay
  }, [btn]);

  return (
    <Fragment>
      <NewsletterModal />
      <button
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#newsletter"
        ref={node => (btn = node)}
      >
        Launch
      </button>

      <Header />
      <Divider />
      <div className="d-grid gap-3 w-100">
        <article className='p-3 bg-white text-dark'>
        <h1 className='title'>Who we are</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error exercitationem optio cupiditate aperiam sed sequi, officia ipsam impedit minima rem veritatis. Voluptatibus perferendis ipsam illum doloribus quasi magni dignissimos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui laudantium. Minus fuga inventore accusamus neque a, iure nesciunt aliquam veritatis fugiat laborum et consequuntur pariatur ratione quibusdam alias autem aut voluptates doloremque provident nam. Assumenda, officia! Ipsa sint facere omnis reprehenderit odio? Facere obcaecati quae ipsum assumenda, quaerat recusandae.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil doloribus consequatur suscipit adipisci expedita ex porro atque fugiat incidunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur deserunt dignissimos et accusamus facere odit doloremque, neque eos voluptatem asperiores illo voluptatibus nam eum quo placeat consequuntur totam eveniet odio? Modi totam eum nobis neque qui? Excepturi, numquam velit!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores in assumenda mollitia quidem odio reprehenderit neque recusandae voluptatum cum, dicta magnam maxime quisquam porro! Ea aut, nesciunt iure hic eligendi maxime blanditiis voluptate beatae quas quam! Enim veritatis ratione culpa voluptatibus repellendus quo, mollitia eos sit eius quis, voluptas accusamus!</p>
        </article>
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
            <Link className='btn btn-primary' to={{pathname: '/agreement', state: {url: bookTina}}}>Book Tina</Link>
          </div>
        </article>
        <LotusDivider />
        <h2>Will Plantillas</h2>
        <article id="will" className='m-0 h-100 row d-flex justify-content-end profile-bg'>
          <div className="py-3 col-12 col-lg-3 m-auto">
            <img src={tinaProfile} alt="Head profile of Tina Plantillas" className="profileImg m-auto" />
          </div>
          <div className='py-3 col-12 col-lg-7'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error exercitationem optio cupiditate aperiam sed sequi, officia ipsam impedit minima rem veritatis. Voluptatibus perferendis ipsam illum doloribus quasi magni dignissimos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, qui laudantium. Minus fuga inventore accusamus neque a, iure nesciunt aliquam veritatis fugiat laborum et consequuntur pariatur ratione quibusdam alias autem aut voluptates doloremque provident nam. Assumenda, officia! Ipsa sint facere omnis reprehenderit odio? Facere obcaecati quae ipsum assumenda, quaerat recusandae.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil doloribus consequatur suscipit adipisci expedita ex porro atque fugiat incidunt?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur deserunt dignissimos et accusamus facere odit doloremque, neque eos voluptatem asperiores illo voluptatibus nam eum quo placeat consequuntur totam eveniet odio? Modi totam eum nobis neque qui? Excepturi, numquam velit!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores in assumenda mollitia quidem odio reprehenderit neque recusandae voluptatum cum, dicta magnam maxime quisquam porro! Ea aut, nesciunt iure hic eligendi maxime blanditiis voluptate beatae quas quam! Enim veritatis ratione culpa voluptatibus repellendus quo, mollitia eos sit eius quis, voluptas accusamus!</p>
            <Link className='btn btn-primary' to={{pathname: '/agreement', state: {url: bookWill}}}>Book Will</Link>
          </div>
        </article>
        <LotusDivider />
        <article id="questionnaire" className='mb-5'>
          <h2 className='title'>Not sure who?</h2>
          <p>Don't worry if you aren't sure what you are looking for. Click the link below to take a quick two question survey and we will determine the best course of action.</p>
          <Link to={{pathname: '/booking', state: {bookWill: bookWill, bookTina: bookTina}}} className="btn btn-primary">Take survey</Link>
        </article>

        <div id="testimonialCarousel" class="carousel carousel-dark bg-light slide fw-light fst-italic" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-block w-100 mt-5">
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
              </div>
              <div class="carousel-caption d-block">
                <p>-Person 1</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-block w-100 mt-5">
                <h5>Minima fugiat ducimus doloremque saepe consectetur ipsa repellat atque cum. Iste, fugiat!</h5>
              </div>
              <div class="carousel-caption d-block">
                <p>-Person 2</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-block w-100 mt-5">
                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, totam!</h5>
              </div>
              <div class="carousel-caption d-block">
                <p>-Person 3</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-block w-100 mt-5">
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
              </div>
              <div class="carousel-caption d-block">
                <p>-Person 4</p>
              </div>
            </div>
          </div>
          {/* <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
      <Divider />
      <Footer />
    </Fragment>
  )
}

export default Home
