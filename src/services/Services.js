"use client";
import React, { useState } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import servicesData from './servicesData';

import './services.scss';

function Services() {
    const [show, setShow] = useState(false);
    const [service, setService] = useState(0);
    const handlePopup = (i) => {
        setService(i);
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
                {servicesData?.map((item, i) => {
                    return (
                        <div key={i} className="col-lg-4 col-md-6" onClick={() => handlePopup(i)}>
                            <div className="service-item">
                                <span className="service-icon">
                                    <BsCodeSlash />
                                </span>
                                <h3 className="service-heading">{item.title}</h3>
                                <p className="service-desc">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    {/* Popup */}
    <div className={`popup-overlay ${show && 'active-overlay'}`} onClick={handlePopup}></div>
    <div className={`service-popup ${show && 'active'}`}>
        <div className="s-popup-content-wrap">
            <div className="popup-cross-icon">
                <GrClose onClick={handlePopup} />
            </div>
            <div className="s-popup-slider">
                <div className="s-popup-slider-img">
                    <img src={servicesData[service]?.image} alt={servicesData[service]?.title} />
                </div>
            </div>
            <div className="s-popup-content pt-3">
                <h3 className="popup-content-heading">{servicesData[service]?.title}</h3>
                <div className="s-popup-tech">
                    <p>Technology:</p>
                    <div className="tech-items">
                    {servicesData[service]?.technology.map((item, i) => {
                        return (
                            <div key={i} className="tech-item">{item}</div>
                        )
                    })}
                    </div>
                </div>
                <p className="popup-desc">{servicesData[service]?.details}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services