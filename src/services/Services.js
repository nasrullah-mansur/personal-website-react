"use client";
import React, { useState } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

function Services() {
    const [show, setShow] = useState(false);
    const handlePopup = () => {
        setShow(prev => {
            return !prev;
        })
    };

  return (
    <>
    <section className="service-area section-padding-top" id="services">
        <div className="container">
            <h4 className="sub-title">My Services</h4>
            <h2 className="section-heading">What I offer?</h2>

            <div className="row">
                <div className="col-lg-4 col-md-6" onClick={handlePopup}>
                    <div className="service-item">
                        <span className="service-icon">
                            <BsCodeSlash />
                        </span>
                        <h3 className="service-heading">Web Design</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor sit amet, consec tetur
                            adipisicing elit. Accusan tium.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item">
                        <span className="service-icon">
                        <BsCodeSlash />
                        </span>
                        <h3 className="service-heading">
                            Web Developement
                        </h3>
                        <p className="service-desc">
                            Lorem ipsum dolor sit amet, consec tetur
                            adipisicing elit. Accusan tium.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item">
                        <span className="service-icon">
                        <BsCodeSlash />
                        </span>
                        <h3 className="service-heading">Graphic Design</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor sit amet, consec tetur
                            adipisicing elit. Accusan tium.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item">
                        <span className="service-icon">
                        <BsCodeSlash />
                        </span>
                        <h3 className="service-heading">Photography</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor sit amet, consec tetur
                            adipisicing elit. Accusan tium.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item">
                        <span className="service-icon">
                        <BsCodeSlash />
                        </span>
                        <h3 className="service-heading">Mobile Apps</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor sit amet, consec tetur
                            adipisicing elit. Accusan tium.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item">
                        <span className="service-icon">
                        <BsCodeSlash />
                        </span>
                        <h3 className="service-heading">Branding</h3>
                        <p className="service-desc">
                            Lorem ipsum dolor sit amet, consec tetur
                            adipisicing elit. Accusan tium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Popup */}
    <div class={`popup-overlay ${show && 'active-overlay'}`} onClick={handlePopup}></div>
    <div className={`service-popup ${show && 'active'}`}>
        <div className="s-popup-content-wrap">
            <div className="popup-cross-icon">
                <GrClose onClick={handlePopup} />
            </div>
            <div className="s-popup-slider">
                <div className="s-popup-slider-img">
                    <img src="../../images/service-popup-img.jpg" alt="image" />
                </div>
            </div>
            <div className="s-popup-content pt-3">
                <h3 className="popup-content-heading">
                    E-Commerce Website Using Laravel
                </h3>
                <div className="s-popup-tech">
                    <p>Technology:</p>
                    <div className="tech-items">
                        <div className="tech-item">HTML</div>
                        <div className="tech-item">CSS</div>
                        <div className="tech-item">JavaScript</div>
                    </div>
                </div>
                <p className="popup-desc">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by from injected humour, or randomised words
                    which don't look even slightly believable. There are
                    many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form,
                    by from injected humour, or randomised words which don't
                    look even slightly believable.
                </p>
                <p className="popup-desc">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by from injected humour, or randomised words
                    which don't look even slightly believable. There are
                    many variations of passages of Lorem Ipsum available,
                    but the majority have suffered.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services