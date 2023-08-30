"use client";

import React, { Fragment, useState } from 'react';
import { GrClose, GrLocation, GrPhone } from 'react-icons/gr';
import { FaRegEnvelope } from 'react-icons/fa';
import {navbar, themeInfo } from '@/data/navbar';
import contactData from '@/data/contact';
import { motion } from 'framer-motion';

function Header() {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState('');

  // Responsive Handler;
  const responsiveHandler = () => {
    setOpen((prev) => {
      return !prev;
    })
  } 

    // Fixed menu to top;
    window.addEventListener('scroll', function(i){
        if(window.pageYOffset >= 200) {
            setFixed('fixed-top');
        } else {
            setFixed('');
        }
    })

  return (
    <Fragment>
      <header className={`header-area ${fixed}`}>
          <div className="header-menu">
              <div className="container">
                  <div className="menu-wrap">
                      <div className="menu-left">
                          <div className="header-logo">
                              <a href="/">
                                  <img src={themeInfo.logo} alt={themeInfo.title} />
                              </a>
                          </div>
                      </div>
                      <div className="menu-right">
                          <nav className="main-menu d-none d-lg-block" id="mobile-menu">
                              <ul>
                                {navbar?.map((item, i) => {
                                  return (
                                    <li key={i}>
                                        <a href={item.url}>{item.label}</a>
                                    </li>
                                  )
                                })}
                              </ul>
                          </nav>
                          <div className="menu-btn d-flex align-items-center">
                              <motion.a
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                href="#" className="header-btn prim-btn d-md-block d-none">
                                  Download CV
                              </motion.a>
                              <div className="menu-bar d-lg-none">
                                  <div className="navbar-sign side-toggle ml-20" onClick={responsiveHandler}>
                                      <span className="menu-line-1"></span>
                                      <span className="menu-line-2"></span>
                                      <span className="menu-line-3"></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>

      <div className={`mobile-menu ${open && 'section-show'}`}>
        <GrClose className='close-btn' onClick={responsiveHandler} />
        <div className="logo text-left">
            <a href="#">
                <img src="./images/logo.png" alt="Brand logo" />
            </a>
        </div>
        <div className="list">
            <ul>
            {navbar?.map((item, i) => {
                return (
                <li key={i}>
                    <a href={item.url}>{item.label}</a>
                </li>
                )
            })}
            </ul>
        </div>
        <div className="location">
            <ul className="location-list">
                <li>
                    <div className="icon">
                        <GrLocation />
                    </div>
                    <span>{contactData?.address}</span>
                </li>
                <li>
                    <div className="icon">
                        <GrPhone />
                    </div>
                    <span>
                        <a href={'tel:'+contactData?.phone}>{contactData?.phone}</a>
                    </span>
                </li>
                <li>
                    <div className="icon">
                        <FaRegEnvelope />
                    </div>
                    <span><a href={'mailto:'+contactData?.email}>{contactData?.email}</a></span>
                </li>
            </ul>
        </div>

        
      </div>
      <div className={`mobile-menu-overlay ${open && 'section-show'}`} onClick={responsiveHandler}></div>
      
    </Fragment>
  )
}

export default Header;