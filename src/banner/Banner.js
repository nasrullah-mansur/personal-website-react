import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import bannerData from './bannerData';
import social from '@/data/social';

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
                            <div className="banner-left">
                                <span className="sub-heading"> Hello I'm </span>
                                <h1 className="banner-title">{bannerData?.title}</h1>
                                <span className="deg">{bannerData?.subTitle}</span>
                                <p className="banner-desc">{bannerData?.description}</p>

                                <ul className="social-icons">
                                    {social?.map((item, i) => {
                                        return(
                                            <li key={i}>
                                                <a href={item.url}>
                                                    {socialIcon(item.label)}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="banner-right">
                                <img src={bannerData?.image} alt={bannerData?.imageAlt} />
                                <div className="exp-block project">
                                    <span className="amount">{bannerData?.projectComplete}<span className="plus">+</span></span>
                                    <p className="title">
                                        project <br />
                                        completed
                                    </p>
                                </div>
                                <div className="exp-block experience">
                                    <span className="amount">{bannerData?.experience}</span>
                                    <p className="title">
                                        Years of <br />
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Banner