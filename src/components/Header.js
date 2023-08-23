"use client";

import React, { Fragment, useState } from 'react';
import { GrClose, GrLocation, GrPhone } from 'react-icons/gr';
import { FaRegEnvelope } from 'react-icons/fa';

function Header() {

  const [open, setOpen] = useState(false);

  // Responsive Handler;
  const responsiveHandler = () => {
    setOpen((prev) => {
      return !prev;
    })

  } 

  return (
    <Fragment>
      <header className="header-area">
          <div className="header-menu">
              <div className="container">
                  <div className="menu-wrap">
                      <div className="menu-left">
                          <div className="header-logo">
                              <a href="/">
                                  <img src="./images/logo.png" alt="Brand logo" />
                              </a>
                          </div>
                      </div>
                      <div className="menu-right">
                          <nav className="main-menu d-none d-lg-block" id="mobile-menu">
                              <ul>
                                  <li>
                                      <a href="#banner">Home</a>
                                  </li>
                                  <li>
                                      <a href="#about">About</a>
                                  </li>
                                  <li>
                                      <a href="#services">Services</a>
                                  </li>
                                  <li>
                                      <a href="#portfolio">Portfolio</a>
                                  </li>
                                  <li>
                                      <a href="#contact">Contact</a>
                                  </li>
                              </ul>
                          </nav>
                          <div className="menu-btn d-flex align-items-center">
                              <a href="#" className="header-btn prim-btn d-md-block d-none">
                                  Download CV
                              </a>
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="location">
            <ul className="location-list">
                <li>
                    <div className="icon">
                        <GrLocation />
                    </div>
                    <span>4929 Thorn Street Crow heart, WY 82512</span>
                </li>
                <li>
                    <div className="icon">
                        <GrPhone />
                    </div>
                    <span>
                        <a href="tel:+8801728619733">+8801728619733</a>
                    </span>
                </li>
                <li>
                    <div className="icon">
                        <FaRegEnvelope />
                    </div>
                    <span><a href="mailto:nasrullah.cit.bd@gmail.com">nasrullah.cit.bd@gmail.com</a></span>
                </li>
            </ul>
        </div>

        
      </div>
      <div className={`mobile-menu-overlay ${open && 'section-show'}`} onClick={responsiveHandler}></div>
      
    </Fragment>
  )
}

export default Header;