import About from '@/about/About';
import Banner from '@/banner/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Contact from '@/contact/Contact';
import Portfolio from '@/portfolio/Portfolio';
import Services from '@/services/Services';
import Technology from '@/technology/Technology';

import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Technology />
      <Footer />
    </Fragment>
  )
}
