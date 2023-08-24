import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function FrontLayout({children}) {
  return (
    <Fragment>
        <Header />
            {children}
        <Footer />
    </Fragment>
  )
}

export default FrontLayout;