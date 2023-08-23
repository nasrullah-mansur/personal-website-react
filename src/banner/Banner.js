import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Banner() {
  return (
    <section className="banner-area bg-default" id="banner">
                <div className="container h-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-5 pb-lg-0">
                            <div className="banner-left">
                                <span className="sub-heading"> Hello I'm </span>
                                <h1 className="banner-title">Nasrullah Mansur</h1>
                                <span className="deg">Full-Stack Web Developer</span>
                                <p className="banner-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Laborum corrupti
                                    consequatur itaque soluta magni, dolor, in
                                    error facilis sit! Doloribus! itaque soluta
                                    magni, dolor consequatur.
                                </p>

                                <ul className="social-icons">
                                    <li>
                                        <a href="#">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaGithub />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="banner-right">
                                <img src="../../images/banner/banner-avatar.png" alt="banner avatar" />
                                <div className="exp-block project">
                                    <span className="amount">200<span className="plus">+</span></span>
                                    <p className="title">
                                        project <br />
                                        completed
                                    </p>
                                </div>
                                <div className="exp-block experience">
                                    <span className="amount">5</span>
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