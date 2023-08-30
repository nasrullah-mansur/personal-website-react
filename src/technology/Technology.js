"use client";
import React from 'react';

import './technology.scss';
import technologyData from './technologyData';

import { motion } from 'framer-motion';

function Technology() {
  return (
    <section className="technology-area section-padding">
        <div className="container">
            <div className="row align-items-center">
                {technologyData?.map((item, i) => {
                    return (
                        <motion.div
                        initial={{scale: 1.5}}
                        whileInView={{scale: 1}}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        key={i} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <div className="single-tech">
                                <div className="tech-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <span className="tech-name">{item.title}</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Technology;