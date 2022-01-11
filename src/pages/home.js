import React, { Fragment } from 'react';

import About from '../components/about';
import Biographies from '../components/biographies';
import Divider from '../components/divider';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import Testimonials from '../components/testimonials';

const Home = () => {
  return (
    <Fragment>
      <Newsletter />
      <Header />
      <Divider />
      <div className="d-grid gap-3 w-100">
        <About />
        <Biographies />
        <Testimonials />
      </div>
      <Divider />
      <Footer />
    </Fragment>
  )
}

export default Home
