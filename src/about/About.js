import React from 'react'

function About() {
  return (
    <section className="about-area section-padding-top" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-0">
                            <div className="about-img">
                                <img src="../../images/about/1.jpg" alt="about img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h4 className="sub-title">About Me</h4>
                                <h2 className="section-heading">
                                    Why do you hire me for your next website
                                    project?
                                </h2>
                                <div className="about-desc">
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by from injected humour, or randomised
                                        words which don't look even slightly
                                        believable.
                                    </p>

                                    <p>
                                        If you are going to use a passage of
                                        Lorem Ipsum, you need total be sure
                                        there isn't anything embarrassing hidden
                                        in the middle of text.
                                    </p>
                                </div>
                                <div className="about-btns">
                                    <a href="#" className="hire-me prim-btn">Hire Me Now</a>
                                    <a href="#" className="download-cv prim-btn">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default About