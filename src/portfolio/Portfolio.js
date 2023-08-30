"use client";
import React, { Fragment, useState } from 'react';
import { FaDesktop } from 'react-icons/fa';
import { portfolioCategories, portfolioData } from './portfolioData';

import { motion } from 'framer-motion';

import './portfolio.scss';

function Portfolio() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(portfolioData);
    const [popup, setPopup] = useState({
        title: '',
        description: '',
        related: data
    });

    // Handle Popup;
    const handlePopup = (e, item) => {
        e.preventDefault();
        setShow(prev => {
            return !prev;
        })

        const updateData = portfolioData?.filter((i) => {
            return i.category == item?.category;
        })        

        const updatePopup = {
            title: item?.title,
            description: item?.description,
            related: updateData
        }

        setPopup(updatePopup);
    };

    const relatedPopupHandler = () => {
        setShow(true);
    }
   

    // Handle categories;
    const handleCategory = (e, item) => {
        e.preventDefault();
        if(item === 'All') {
            setData(portfolioData);
        } else {
            const updateData = portfolioData?.filter((i) => {
                return i.category == item;
            })
            setData(updateData);
        } 
        
    }

  return (
    <Fragment>
        <section className="portfolio-area section-padding-top" id="portfolio">
            <div className="container">
                <h4 className="sub-title">My Portfolio</h4>
                <h2 className="section-heading">My Recent Portfolio</h2>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <div className="portfolio-nav">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                            href="#" onClick={(e) => handleCategory(e, 'All')}>All</motion.a>
                            {portfolioCategories?.map((item, i) => {
                                return (
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                    key={i} href="#" onClick={(e) => handleCategory(e, item)}>{item}</motion.a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-lg-2 text-center text-md-start">
                        <motion.a
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href="#" className="prim-btn view-all-btn">View All</motion.a>
                    </div>
                </div>
                <div className="row">
                    {data?.map((item, i) => {
                        return (
                        <Fragment key={i}>
                            {i <= 7 && 
                                <motion.div
                                    initial={{scale: 1.5}}
                                    whileInView={{scale: 1}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="portfolio-item">
                                        <a href="#" className="portfolio-img" onClick={(e) => handlePopup(e, item)}>
                                            <img src={item.image} alt={item.title} />
                                        </a>
                                        <span>{item.category}</span>
                                        <a onClick={(e) => handlePopup(e, item)} href="#">{item.title}</a>
                                    </div>
                                </motion.div>
                            }
                        </Fragment>
                        )
                        
                    })}
                                    
                </div>
            </div>
        </section>

        <div className={`popup-overlay ${show && 'active-overlay'}`} onClick={handlePopup}></div>
        <div className={`portfolio-popup ${show && 'active'}`}>
            <div className="popup-cross-icon"><i className="fas fa-times"></i></div>
            <div className="popup-icon">
                <FaDesktop />
            </div>
            <div className="portfolio-popup-content-wrap">
                <h3 className="popup-content-heading">{popup?.title}</h3>
                {popup?.description}
                <div className="portfolio-item-list">
                    <p className="p-item-title">
                        Here is some portfolio about Web Design
                    </p>
                    <div className="row">
                        {popup?.related.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                {i <= 2 && 
                                <div className="col-lg-4">
                                    <div className="p-portfolio-item" onClick={relatedPopupHandler}>
                                        <a onClick={(e) => handlePopup(e, item)} href="#"><img src="../../images/portfolio/1.jpg" alt="" /></a>
                                        <p className="p-portfolio-item-des">{item?.category}</p>

                                        <h4 className="p-portfolio-item-title">
                                            <a onClick={(e) => handlePopup(e, item)} href="#">{item?.title}</a>
                                        </h4>
                                    </div>
                                </div>
                                }
                            </Fragment>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Portfolio;