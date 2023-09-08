"use client";
import React from 'react';
import aboutData from './aboutData';

import { motion } from "framer-motion";

import './about.scss';

function About() {
  return (
    <section className="about-area section-padding-top" id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-lg-0">
                    <div className="about-img">
                        <img src={aboutData?.image} alt={aboutData?.imageAlt} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                    className="about-content">
                        <h4 className="sub-title">About Me</h4>
                        <h2 className="section-heading">{aboutData?.title}</h2>
                        <div className="about-desc" dangerouslySetInnerHTML={{__html: aboutData?.description}}></div>
                        <div className="about-btns">
                            <motion.a
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            href="#" className="hire-me prim-btn">Hire Me Now</motion.a>
                            <motion.a
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            href="#" className="download-cv prim-btn">Download CV</motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About