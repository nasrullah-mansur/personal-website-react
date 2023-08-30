"use client";

import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import bannerData from './bannerData';
import social from '@/data/social';

import { motion } from 'framer-motion';

import './banner.scss';

function Banner() {

    const socialIcon = (label) => {
        if(label == 'facebook') {
            return <FaFacebookF />;
        } else if(label == 'linkedin') {
            return <FaLinkedinIn />;
        } else if(label == 'github') {
            return <FaGithub />;
        }
    }

  return (
    <section className="banner-area bg-default" id="banner">
        <div className="container h-100">
            <div className="row align-items-center">
                <div className="col-lg-6 pb-5 pb-lg-0">
                    <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 0.3
                    }}
                    className="banner-left">
                        <span className="sub-heading"> Hello I'm </span>
                        <h1 className="banner-title">{bannerData?.title}</h1>
                        <span className="deg">{bannerData?.subTitle}</span>
                        <p className="banner-desc">{bannerData?.description}</p>

                        <ul className="social-icons">
                            {social?.map((item, i) => {
                                return(
                                    <li key={i}>
                                        <motion.a 
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        href={item.url}>
                                            {socialIcon(item.label)}
                                        </motion.a>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="banner-right">
                        <motion.img 
                       initial={{ scale: 0.6 }}
                       animate={{ scale: 1 }}
                        transition={{ ease: "easeOut", duration: 0.3}}
                        src={bannerData?.image} alt={bannerData?.imageAlt} />
                        <motion.div 
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3}}
                        className="exp-block project">
                            <span className="amount">{bannerData?.projectComplete}<span className="plus">+</span></span>
                            <p className="title">
                                project <br />
                                completed
                            </p>
                        </motion.div>
                        <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3}}
                        className="exp-block experience">
                            <span className="amount">{bannerData?.experience}</span>
                            <p className="title">
                                Years of <br />
                                Experience
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner