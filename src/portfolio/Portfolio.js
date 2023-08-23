"use client";
import React, { useState } from 'react';
import { FaDesktop } from 'react-icons/fa';

function Portfolio() {
    const [show, setShow] = useState(false);
    const handlePopup = (e) => {
        e.preventDefault();
        setShow(prev => {
            return !prev;
        })
    };

  return (
    <>
    <section className="portfolio-area section-padding-top" id="portfolio">
        <div className="container">
            <h4 className="sub-title">My Portfolio</h4>
            <h2 className="section-heading">My Recent Portfolio</h2>
            <div className="row align-items-center">
                <div className="col-lg-10">
                    <div className="portfolio-nav">
                        <a href="#" className="active-nav">All</a>
                        <a href="#">Web Design</a>
                        <a href="#">Web Development</a>
                        <a href="#">React JS</a>
                        <a href="#">Node JS</a>
                        <a href="#">Graphic Design</a>
                    </div>
                </div>
                <div className="col-lg-2 text-center text-md-start">
                    <a href="#" className="prim-btn view-all-btn">View All</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img" onClick={handlePopup}>
                            <img src="../../images/portfolio/1.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a onClick={handlePopup} href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/2.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/3.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/4.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/5.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/6.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/7.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="portfolio-item">
                        <a href="#" className="portfolio-img">
                            <img src="../../images/portfolio/8.jpg" alt="portfolio" />
                        </a>
                        <span>Web Design</span>
                        <a href="#">Personal Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class={`popup-overlay ${show && 'active-overlay'}`} onClick={handlePopup}></div>
    <div className={`portfolio-popup ${show && 'active'}`}>
        <div className="popup-cross-icon"><i className="fas fa-times"></i></div>
        <div className="popup-icon">
            <FaDesktop />
        </div>
        <div className="portfolio-popup-content-wrap">
            <h3 className="popup-content-heading">Web Design</h3>
            <p className="popup-desc">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by from injected humour, or randomised words which don't look even slightly believable. There are many
                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by from injected humour, or randomised words which don't look even slightly believable.
            </p>
            <p className="popup-desc">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by from injected humour, or randomised words which don't look even slightly believable. There are many
                variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <div className="portfolio-item-list">
                <p className="p-item-title">
                    Here is some portfolio about Web Design
                </p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="p-portfolio-item">
                            <a href="#"><img src="../../images/portfolio/1.jpg" alt="" /></a>
                            <p className="p-portfolio-item-des">Web Design</p>

                            <h4 className="p-portfolio-item-title">
                                <a href="#">Personal Portfolio</a>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="p-portfolio-item">
                            <a href="#"><img src="../../images/portfolio/1.jpg" alt="" /></a>
                            <p className="p-portfolio-item-des">Web Design</p>

                            <h4 className="p-portfolio-item-title">
                                <a href="#">Personal Portfolio</a>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="p-portfolio-item">
                            <a href="#"><img src="../../images/portfolio/1.jpg" alt="" /></a>
                            <p className="p-portfolio-item-des">Web Design</p>

                            <h4 className="p-portfolio-item-title">
                                <a href="#">Personal Portfolio</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Portfolio;