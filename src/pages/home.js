import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PopupButton } from "react-calendly";

import Header from '../components/header';
import Footer from '../components/footer';

import male from '../images/male.png';
import female from '../images/female.png';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <article className='mb-4'>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus totam, facere unde amet tempora odio quidem sequi accusamus debitis, tempore adipisci dolor atque aut molestiae fugit est sed placeat ducimus hic nisi? Quo possimus sunt consequuntur hic saepe repellendus quia corrupti.
      </p>
      <p>
        Minus cumque autem quas voluptatibus. Consectetur sequi odit sunt cumque ducimus quod ea officia non. Ex libero culpa saepe nulla cum in maiores repellendus nihil corporis recusandae dolorem excepturi, adipisci praesentium voluptatum pariatur quam sit animi mollitia. Consequatur provident nisi quo non numquam amet quis architecto omnis, quas facere veritatis voluptatem soluta. Adipisci molestias dolorum nulla ipsum, odit repellat.
      </p>
      </article>

      <h3 className='title'>Who we are</h3>
      <article id="will" className='mb-4 row'>
        <div className="col-12 col-md-6 order-md-last">
          <img src={male} alt="profile of Will" width='300px' />
        </div>
        <div className='col-12 col-md-6 float-md-start'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloremque accusamus adipisci illum culpa, ea eaque recusandae, ab voluptatum molestiae perferendis. Magnam et, culpa dolorem molestias fugiat illum cumque soluta iure maiores unde possimus qui asperiores! Natus quaerat voluptas aspernatur, nam earum officiis veniam doloremque, ea sequi, vero repellendus neque!</p>
          <PopupButton
            className='btn btn-primary col-4'
            text='Book Will'
            url='https://calendly.com/subconcoaching/15'
          />
        </div>
      </article>
      <article id="tina" className='mb-4 row d-flex'>
        <div className='col-12 col-md-6'>
        <img src={female} alt="profile of Tina" width='300px' />
        </div>
        <div className='col-12 col-md-6'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloremque accusamus adipisci illum culpa, ea eaque recusandae, ab voluptatum molestiae perferendis. Magnam et, culpa dolorem molestias fugiat illum cumque soluta iure maiores unde possimus qui asperiores! Natus quaerat voluptas aspernatur, nam earum officiis veniam doloremque, ea sequi, vero repellendus neque!</p>
          <PopupButton
          className='btn btn-primary'
            text='Book Tina'
            url='https://calendly.com/subconcoachtina/15min'
          />
        </div>
      </article>
      <article id="questionnaire" className='mb-5'>
        <h3 className='title'>Not sure who?</h3>
        <p>Don't worry if you aren't sure what you are looking for. Click the link below to take a quick two question survey and we will determine the best course of action.</p>
        <Link to='/booking' className="btn btn-primary">Take survey</Link>
      </article>
      <Footer />
    </Fragment>
  )
}

export default Home
