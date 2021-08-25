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

      <h3>Who we are</h3>
      <article id="will" className='mb-4'>
        <img src={male} alt="profile of Will" width='80%' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloremque accusamus adipisci illum culpa, ea eaque recusandae, ab voluptatum molestiae perferendis. Magnam et, culpa dolorem molestias fugiat illum cumque soluta iure maiores unde possimus qui asperiores! Natus quaerat voluptas aspernatur, nam earum officiis veniam doloremque, ea sequi, vero repellendus neque!</p>
        <PopupButton
        className='btn btn-info'
          text='Book Will'
          url='https://calendly.com/subconcoaching/15'
         />
      </article>
      <article id="tina" className='mb-4'>
        <img src={female} alt="profile of Tina" width='80%' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloremque accusamus adipisci illum culpa, ea eaque recusandae, ab voluptatum molestiae perferendis. Magnam et, culpa dolorem molestias fugiat illum cumque soluta iure maiores unde possimus qui asperiores! Natus quaerat voluptas aspernatur, nam earum officiis veniam doloremque, ea sequi, vero repellendus neque!</p>
        <PopupButton
        className='btn btn-info'
          text='Book Tina'
          url='https://calendly.com/subconcoachtina/15min'
         />
      </article>
      <article id="questionnaire" className='mb-5'>
        <h3>Not sure?</h3>
        <p>Don't worry if you aren't sure what you are looking for. Click the link below to take a quick two question survey and we will determine the best course of action</p>
        <Link to='/booking' className="btn btn-info">Help now</Link>
      </article>
      <Footer />
    </Fragment>
  )
}

export default Home
